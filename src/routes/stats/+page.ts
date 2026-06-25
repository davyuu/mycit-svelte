type ServiceResponse = {
	people: { _id: string; name: string }[]
	type: 'CONFIRMED' | 'DECLINED'
	updatedAt: string
}

type VolunteerSchedule = {
	name: string
	schedule: { updatedAt: string; type: string }[]
}

function buildStats(confirmed: ServiceResponse[], declined: ServiceResponse[]) {
	const schedule = [...confirmed.filter((_, index) => index % 7 === 0), ...declined.filter((_, index) => index % 7 === 0)]
	const volunteers: Record<string, VolunteerSchedule> = {}

	for (const data of schedule) {
		for (const person of data.people || []) {
			volunteers[person._id] ??= { name: person.name, schedule: [] }
			volunteers[person._id].schedule.push({ updatedAt: data.updatedAt, type: data.type })
		}
	}

	return Object.values(volunteers)
		.map((person) => {
			const ordered = person.schedule.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
			const lastFour = ordered.slice(0, 4)
			const declines = lastFour.filter((service) => service.type === 'DECLINED').length
			return {
				name: person.name,
				declines,
				dates: ordered.filter((service) => service.type === 'DECLINED').slice(0, 3)
			}
		})
		.filter((person) => person.declines > 2)
		.sort((a, b) => a.name.localeCompare(b.name))
}

export async function load({ fetch }) {
	const baseUrl = 'https://cit-stats.herokuapp.com/services'
	try {
		const [confirmedResponse, declinedResponse] = await Promise.all([
			fetch(`${baseUrl}/confirmed`),
			fetch(`${baseUrl}/declined`)
		])

		if (!confirmedResponse.ok || !declinedResponse.ok) {
			throw new Error('Stats service is unavailable.')
		}

		const [confirmed, declined] = await Promise.all([
			confirmedResponse.json(),
			declinedResponse.json()
		])

		return { schedules: buildStats(confirmed, declined), error: '' }
	} catch (error) {
		return { schedules: [], error: error instanceof Error ? error.message : 'Unable to load stats.' }
	}
}
