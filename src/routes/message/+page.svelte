<script lang="ts">
	import { onMount } from 'svelte'

	interface MessageResponse {
		acf: {
			title: string
			series_name: string
			series_image: {
				url: string
			}
			date: string
			message_number: string
			message_chapter: string
			outline: string
			study_chapter: string
			study_guide: string
			group_material: string
			supplementary_material: string
			set_list: string
		}
	}

	interface Message {
		title: string
		seriesName: string
		seriesImage: string
		date: Date
		messageNumber: string
		messageChapter: string
		outline: string
		studyChapter: string
		studyGuide: string
		groupMaterial: string
		supplementaryMaterial: string
		setList: string
	}

	const MESSAGES_API_URL = 'https://mycit.info/wp-json/wp/v2/messages'

	let messages: Message[] = []
	let currentMessageIndex: number
	$: message = messages[currentMessageIndex]

	async function fetchMessages(): Promise<Message[]> {
		const res = await fetch(MESSAGES_API_URL)
		const data: MessageResponse[] = await res.json()

		return data.map((val: MessageResponse) => {
			const message = val.acf
			return {
				title: message.title,
				seriesName: message.series_name,
				seriesImage: message.series_image.url,
				date: new Date(message.date),
				messageNumber: message.message_number,
				messageChapter: message.message_chapter,
				outline: message.outline,
				studyChapter: message.study_chapter,
				studyGuide: message.study_guide,
				groupMaterial: message.group_material,
				supplementaryMaterial: message.supplementary_material,
				setList: message.set_list
			}
		})
	}

	function getCurrentMessageIndex(): number {
		const today = new Date()
		return messages.findIndex((message) => message.date < today)
	}

	onMount(async () => {
		messages = await fetchMessages()
		currentMessageIndex = getCurrentMessageIndex()
	})
</script>

<div class="text-column">
	{#if message}
		<div class="message-content">
			<div class="message-header-container">
				<img class="message-header-img" src={message.seriesImage} alt="" />
				<div class="message-header-tabs-wrapper">
					<div class="message-container">
						<h1 class="message-title">{message.title}</h1>
						<p class="message-date">{message.date?.toDateString()}</p>
						<p class="message-number-chapter">{message.messageNumber} {message.messageChapter}</p>
						<div class="message-html">{@html message.outline}</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
