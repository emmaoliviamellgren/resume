export const data = {
	contact: {
		email: 'mellgrenemma0@gmail.com',
		phone: '073 709 22 81',
	},
	experience: {
		position: 'Front End Developer Intern',
		company: 'Dogstr',
		duration: 'Nov 2024 - Present',
		description: {
			text: `As a frontend developer intern at Dogstr, I am responsible for designing and developing a web application that complements the existing mobile app. Key responsibilities include:`,
			responsibilities: [
				'Building a mobile-first, responsive web app using Angular and Angular Material',
				'Enabling users to discover and review dog-friendly places near them via an interactive map, using the Google Maps API',
				'Search functionality using Algolia',
				'Incorporating gamification to encourage user engagement',
				'Implementing a modern, consistent UI for a visually appealing and accessible interface',
			],
		},
	},
	projects: {
		list: [
			{
				name: 'Portfolio',
				description: `My personal portfolio website, built using Next.js and Tailwind CSS. The website is fully responsive and showcases my projects, skills, and education.`,
				techStack: ['Next.js', 'Tailwind CSS'],
				github: '',
				website: '',
			},
			{
				name: 'Dogstr',
				description: `A mobile app that helps dog owners find dog-friendly places near them. The app allows users to discover and review dog-friendly places, such as parks, cafes, and restaurants.`,
				techStack: ['React Native', 'Firebase', 'Google Maps API'],
				github: '',
				website: '',
			},
			{
				name: 'Dogstr',
				description: `A mobile app that helps dog owners find dog-friendly places near them. The app allows users to discover and review dog-friendly places, such as parks, cafes, and restaurants.`,
				techStack: ['React Native', 'Firebase', 'Google Maps API'],
				github: '',
				website: '',
			},
		],
	},
	education: {
		degree: 'Bachelor of Science in Computer Science',
		school: 'KTH Royal Institute of Technology',
		duration: '2019 - 2023',
	} as const,
};
