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

export async function load({ fetch }) {
	const response = await fetch('https://mycit.info/wp-json/wp/v2/messages')
	if (!response.ok) {
		return { messages: [] as Message[], error: 'Unable to load messages.' }
	}

	const data = await response.json()
	const messages = data.map((val: any) => {
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
