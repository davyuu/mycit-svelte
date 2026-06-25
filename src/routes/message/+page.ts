import type { PageLoad } from './$types'

export type Message = {
	title: string
	seriesName: string
	seriesImage: string
	date: string
	messageNumber: string
	messageChapter: string
	outline: string
	studyChapter: string
	studyGuide: string
	groupMaterial: string
	supplementaryMaterial: string
	setList: string
}

type MessageResponse = {
	acf?: {
		title?: string
		series_name?: string
		series_image?: { url?: string }
		date?: string
		message_number?: string
		message_chapter?: string
		outline?: string
		study_chapter?: string
		study_guide?: string
		group_material?: string
		supplementary_material?: string
		set_list?: string
	}
}

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('https://mycit.info/wp-json/wp/v2/messages')
	if (!response.ok) {
		return { messages: [] as Message[], error: 'Unable to load messages.' }
	}

	const data = (await response.json()) as MessageResponse[]
	const messages = data.map((val) => {
		const message = val.acf || {}
		return {
			title: message.title || '',
			seriesName: message.series_name || '',
			seriesImage: message.series_image?.url || '',
			date: message.date || '',
			messageNumber: message.message_number || '',
			messageChapter: message.message_chapter || '',
			outline: message.outline || '',
			studyChapter: message.study_chapter || '',
			studyGuide: message.study_guide || '',
			groupMaterial: message.group_material || '',
			supplementaryMaterial: message.supplementary_material || '',
			setList: message.set_list || ''
		}
	})

	return { messages, error: '' }
}
