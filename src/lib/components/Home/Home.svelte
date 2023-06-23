<script lang="ts">
	import IconMic from '~icons/material-symbols/mic-outline'
	import IconChild from '~icons/cil/child'
	import IconGroup from '~icons/iconoir/group'
	import IconMessage from '~icons/tabler/messages'
	import IconHeart from '~icons/mdi/heart-outline'
	import IconCommunity from '~icons/majesticons/community-line'
	import IconVote from '~icons/mdi/vote'
	import IconEvents from '~icons/mdi/events'

	const sections = [
		{
			key: 'message',
			name: 'Latest Message',
			icon: IconMic,
			route: '/message'
		},
		{
			key: 'kids',
			name: 'citKids',
			icon: IconChild
			// route: '/kids'
		},
		{
			key: 'youth',
			name: 'CITYouth',
			icon: IconGroup
			// route: '/youth'
		},
		{
			key: 'connect',
			name: 'Connect',
			icon: IconMessage
			// route: '/connect'
		},
		{
			key: 'giving',
			name: 'Giving',
			icon: IconHeart
			// route: '/giving'
		},
		{
			key: 'groups',
			name: 'Community Groups',
			icon: IconCommunity
			// route: '/groups'
		},
		{
			key: 'prayer',
			name: 'Prayer Requests',
			icon: IconVote
			// route: '/prayer'
		},
		{
			key: 'events',
			name: 'Upcoming Events',
			icon: IconEvents
			// route: '/events'
		}
	]
</script>

<div class="my-8">
	<ul class="flex flex-wrap">
		{#each sections as section}
			<li class="w-1/2 md:w-1/3 p-4 text-center">
				<div class="block px-4 py-8 rounded shadow-md">
					<a href={section.route}>
						<svelte:component this={section.icon} class="inline-block h-8 w-8" />
						<p class="mt-4">{section.name}</p>
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
