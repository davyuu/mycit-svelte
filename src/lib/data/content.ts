export const themes = {
	alpha: '#ED3024',
	connect: '#3852FF',
	events: '#551A8B',
	giving: '#15C340',
	kids: '#20BCE9',
	message: '#4A275D',
	next: '#000099',
	prayer: '#41434B',
	volunteer: '#FF4545',
	youth: '#212121',
	stats: '#E78736',
	brand: '#5938d9'
} as const

export const strings = {
	confirmTitle: 'Success!',
	confirmDescription: 'Thanks for connecting with us at CIT. Someone will be in contact with you in the next week to follow up.',
	messageHeader: 'Latest Message',
	kidsHeader: 'citKids',
	youthHeader: 'CITYouth',
	eventsHeader: 'Announcements',
	eventsSorry: 'Sorry',
	eventsNoEvents: 'Looks like there are no upcoming announcements. Please check back later for more updates.',
	connectHeader: 'Connect',
	connectTitle: 'Get connected with us',
	connectDescription: "We know that it's important for you to find a church that really fits. We can connect you with one of our pastors to answer any questions you might have about our church's beliefs, community, and culture.",
	prayerHeader: 'Prayer Requests',
	prayerTitle: 'Prayer Request',
	prayerDescription: 'Our prayer team would love to pray for you and your prayer request. We can pray for you anonymously, or if you would like for us to pray for you by name, please put in your contact information.',
	nextHeader: 'Next Steps',
	nextTitle: 'Take Your Next Step',
	nextDescription: "Next Steps is a fun, one-time small group experience to help you get to know CIT better, ask questions, and get connected to church. Whether you're brand new or have been at CIT for years, Next Steps is a great way to go further in your faith and partner with the church to move our mission forward.",
	alphaHeader: 'Try Alpha',
	givingHeader: 'Giving',
	givingTitle: 'Give to our mission',
	givingDescription: 'Thank you for deciding to give to CIT. Your donation helps us fulfill our mission as a church, to lead people into a life changing relationship with Jesus.',
	groupsHeader: 'Community Groups',
	volunteerHome: 'Join A Team',
	volunteerHeader: 'Volunteer',
	volunteerTitle: 'Join A Team',
	volunteerDescription: 'Our teams are dedicated to bringing our very best to our God. We would love for you to become part of a team and discover all that God has purposed for your life.',
	loginHeader: 'Login',
	statsHeader: 'Stats',
	statsDescription: 'Below is a table of volunteers who missed 3 of their last 4 scheduled weeks.'
} as const

export const connectOptions = [
	{ value: 'new church', label: "I'm looking for a new church" },
	{ value: 'new christian', label: "I'm a new christian" },
	{ value: 'interested', label: "I'm interested in knowing more about Christianity" },
	{ value: 'other', label: 'Other' }
]

export const nextOptions = [
	{ value: 'new to CIT', label: "I'm new to CIT" },
	{ value: 'less than 1 year', label: "I've been attending CIT less than 1 year" },
	{ value: 'more than 1 year', label: "I've been attending CIT more than 1 year" }
]

export const alphaOptions = nextOptions

export const volunteerOptions = [
	{ value: 'worship', label: 'Worship' },
	{ value: 'kids', label: 'Kids' },
	{ value: 'greeting', label: 'Greeting' },
	{ value: 'cafe', label: 'Cafe' },
	{ value: 'ushering', label: 'Ushering' },
	{ value: 'parking', label: 'Parking' },
	{ value: 'youth', label: 'Youth' },
	{ value: 'production', label: 'Production' },
	{ value: 'creative', label: 'Creative' },
	{ value: 'connections', label: 'Connections' },
	{ value: 'compassion', label: 'Compassion' }
]

export type HomeSection = {
	title: string
	route: string
	external?: boolean
	icon: string
}

export const homeSections: HomeSection[] = [
	{ title: strings.messageHeader, route: '/message', icon: '🎙️' },
	{ title: strings.eventsHeader, route: 'https://churchintoronto.org/fetch-announce/view', external: true, icon: '📣' },
	{ title: strings.kidsHeader, route: '/kids', icon: '🧒' },
	{ title: strings.connectHeader, route: '/connect', icon: '💬' },
	{ title: strings.alphaHeader, route: '/alpha', icon: '❓' },
	{ title: strings.givingHeader, route: '/giving', icon: '♡' },
	{ title: strings.groupsHeader, route: 'https://churchintoronto.churchcenter.com/groups/community-groups', external: true, icon: '👥' },
	{ title: strings.prayerHeader, route: '/prayer', icon: '🙏' }
]

export const responseKeys = [
	'type',
	'firstName',
	'lastName',
	'fullName',
	'parentsName',
	'kidsName',
	'email',
	'phone',
	'description',
	'message',
	'subscribe',
	'nextSteps',
	'book',
	'contact',
	'prayer'
]
