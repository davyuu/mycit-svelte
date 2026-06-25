import { json, type RequestHandler } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import { responseKeys } from '$lib/data/content'

const sheetName = 'responses'

function normalizeFields(type: string, fields: Record<string, unknown>) {
	return responseKeys.reduce<Record<string, string>>((acc, key) => {
		const value = key === 'type' ? type : fields[key]

		if (typeof value === 'boolean') {
			acc[key] = value ? 'yes' : 'no'
		} else if (value === null || value === undefined) {
			acc[key] = ''
		} else {
			acc[key] = String(value)
		}

		return acc
	}, {})
}

function getSheetsUrl(type: string) {
	if (type === 'prayer') {
		return env.PRAYER_SHEETS_URL || env.FORM_SHEETS_URL
	}

	return env.FORM_SHEETS_URL
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json().catch(() => null)

	if (!body || typeof body.type !== 'string' || typeof body.fields !== 'object') {
		return json({ message: 'Invalid form submission.' }, { status: 400 })
	}

	const sheetsUrl = getSheetsUrl(body.type)

	if (!sheetsUrl) {
		return json({ message: 'Google Sheets endpoint is not configured.' }, { status: 500 })
	}

	const params = new URLSearchParams({
		...normalizeFields(body.type, body.fields),
		formDataNameOrder: JSON.stringify(responseKeys),
		formGoogleSheetName: sheetName
	})

	const upstream = await fetch(sheetsUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: params.toString(),
		redirect: 'follow'
	})

	const text = await upstream.text()
	const lowerText = text.toLowerCase()
	const looksSuccessful = upstream.ok && !lowerText.includes('error') && !lowerText.includes('exception')

	if (!looksSuccessful) {
		return json(
			{
				message: 'Google Sheets rejected the submission.',
				status: upstream.status,
				upstreamBody: text.slice(0, 500)
			},
			{ status: 502 }
		)
	}

	return json({ ok: true })
}
