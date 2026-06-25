export type FormPayload = Record<string, string | boolean | undefined>

export async function submitForm(type: string, fields: FormPayload) {
	const response = await fetch('/api/forms', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ type, fields })
	})

	const result = await response.json().catch(() => ({}))

	if (!response.ok) {
		throw new Error(result?.message || 'Unable to submit the form right now.')
	}

	return result
}
