export const data = {
	contact: {
		email: 'mellgrenemma0@gmail.com',
		linkedin: 'https://www.linkedin.com/in/emma-m-945954192/',
		github: 'https://github.com/emmaoliviamellgren',
		website: 'https://emmamellgren.vercel.app/',
	},
	experience: {
		position: 'Front End Developer',
		company: 'Dogstr',
		duration: 'Nov 2024 - Present',
		description: {
			text: `As a frontend developer intern at Dogstr, I collaborate closely with the UX team to independently develop their website that complement the existing mobile app. Key responsibilities include:`,
			responsibilities: [
				'Building a dynamic, responsive web application using Angular and TypeScript, ensuring smooth user experiences',
				'Developing and integrating frontend and backend systems using Firebase Functions, Node.js, and Express, exposing APIs for user interactions',
				'Enabling users to search, discover, and review dog-friendly places via an interactive map powered by the Google Maps API and Algolia',
				'Implementing a modern, consistent UI for a visually appealing and user-friendly interface',
			],
		},
	},
	projects: {
		list: [
			{
				name: 'Breed Identifier',
				description: `AI-powered breed identification, built as a fun little side project in order to learn basic machine learning and working with AI models. Initially built with TensorFlow.js and the MobileNet image processing model, I later changed the model to one provided by Clarifai to improve accuracy.`,
				techStack: [
					'Next.js',
					'Framer Motion',
					'TensorFlow.js',
					'Clarifai',
				],
				website: 'https://doggy-identifier.vercel.app/',
			},
			{
				name: 'TaskWise - Task Manager',
				description: `An intuitive and user-friendly todo web application built with Next.js and Firebase with Clerk for authentication. Taskwise allows users to manage their tasks efficiently by adding, updating, and deleting todo items.`,
				techStack: ['Next.js', 'Clerk', 'Firebase'],
				website: 'https://taskwise.vercel.app/',
			},
			{
				name: 'Nestify - AirBnB Clone',
				description: `A full stack mock web application inspired by Airbnb, built using Next.js and Firebase with Stripe API for payment flow. It is a modern, scalable, and user-friendly application that allows users to browse (fictional) housings, book stays, and manage their bookings.`,
				techStack: ['Next.js', 'Firebase', 'Stripe API'],
				website: 'https://nestify-gamma.vercel.app/',
			},
			{
				name: 'E-Commerce Website',
				description: `A full stack e-commerce mock web application built with React in the frontend and Node.js + Express in the backend. Users can browse through items, add them to their shopping cart and proceed to checkout process. By creating an account, users can see their order history of previously "purchased" items.`,
				techStack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
				github: '',
				website: 'https://emmas-e-commerce.vercel.app/',
			},
		],
	},
	education: {
		program: 'Front End Developer',
		school: 'KYH',
		duration: 'Aug 2023 - Present',
		description:
			'Courses include JavaScript & TypeScript, UX/UI Design, version control with Git, frameworks like React and Next.js, backend technologies like Node.js, MongoDB, and more. Graduating May 2025!',
	},
	techStack: {
		languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS'],
		libraries: [
			'React',
			'Next.js',
			'Angular',
			'Angular Material',
			'Vue',
			'Node.js',
			'Express',
			'Tailwind CSS',
			'Framer Motion',
		],
		tools: [
			'Git',
			'GitHub',
			'Algolia',
			'Figma',
			'Netlify',
			'Vercel',
			'Render',
			'Firebase',
			'Postman',
			'Azure DevOps',
			'Trello',
		],
	} as const,
};
