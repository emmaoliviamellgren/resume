export const data = {
	contact: {
		email: "mellgrenemma0@gmail.com",
		linkedin: "https://www.linkedin.com/in/emma-m-945954192/",
		github: "https://github.com/emmaoliviamellgren",
		website: "https://emmamellgren.vercel.app/",
	},
	experience: {
		list: [
			{
				position: "Front End Developer",
				company: "TellusTalk",
				duration: "June 2025 - Current",
				description: {
					text: `At TellusTalk I'm part of a team building a scalable React application for email marketing campaigns, serving clients from startups to enterprise corporations and government entities across multiple markets.`,
				},
				internship: false,
			},
			{
				position: "Front End Developer",
				company: "FemClinic",
				duration: "Apr 2025 - May 2025",
				description: {
					text: `As a frontend developer intern at FemClinic, I was part of an agile, cross-functional team responsible for developing FemClinic Hub - a digital healthcare platform connecting women with healthcare providers. Key responsibilities included:`,
					responsibilities: [
						"Collaborating closely with UI/UX team to implement Figma prototypes into visually appealing, responsive and functional components",
						"Building a user authentication system with BankID and other methods",
						"Creating user dashboard features including appointment management and chat",
						"Participating in daily standups and sprint planning using Scrum methodology",
					],
				},
				internship: true,
			},
			{
				position: "Front End Developer",
				company: "Dogstr",
				duration: "Nov 2024 - Apr 2025",
				description: {
					text: `As a frontend developer intern at Dogstr, I collaborated closely with the UX team to independently develop their website that complement the existing mobile app. Key responsibilities included:`,
					responsibilities: [
						"Building a dynamic, responsive web application using Angular and TypeScript, ensuring smooth user experiences",
						"Developing and integrating frontend and backend systems using Firebase Functions, Node.js, and Express, exposing APIs for user interactions",
						"Enabling users to search, discover, and review dog-friendly places via an interactive map powered by the Google Maps API and Algolia",
						"Implementing a modern, consistent UI for a visually appealing and user-friendly interface",
					],
				},
				internship: true,
			},
		],
	},
	projects: {
		list: [
			{
				name: "Task Manager",
				description: `An intuitive and user-friendly todo web application built with Next.js and Firebase with Clerk for authentication.`,
				techStack: ["Next.js", "Clerk", "Firebase"],
				website: "https://taskwise.vercel.app/",
			},
			{
				name: "AirBnB Clone",
				description: `A full stack mock web application inspired by Airbnb, built using Next.js and Firebase with Stripe API for payment flow. It is a modern, scalable, and user-friendly application that allows users to browse (fictional) housings, book stays, and manage their bookings.`,
				techStack: ["Next.js", "Firebase", "Stripe API"],
				website: "https://nestify-gamma.vercel.app/",
			},
			// {
			// 	name: "E-Commerce Website",
			// 	description: `A full stack e-commerce mock web application built with React in the frontend and Node.js + Express in the backend. Users can browse through items, add them to their shopping cart and proceed to checkout process. By creating an account, users can see their order history of previously "purchased" items.`,
			// 	techStack: ["React.js", "Node.js", "Express", "MongoDB"],
			// 	github: "",
			// 	website: "https://emmas-e-commerce.vercel.app/",
			// },
		],
	},
	education: {
		program: "Front End Developer",
		school: "KYH",
		duration: "Aug 2023 - May 2025",
		description:
			"Courses included JavaScript & TypeScript, UX/UI Design, version control with Git, frameworks like React and Next.js, backend technologies like Node.js, MongoDB, and more.",
	},
	techStack: {
		languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
		libraries: [
			"React",
			"Redux",
			"Next.js",
			"Angular",
			"Angular Material",
			"Material UI",
			"Vue",
			"Node.js",
			"Express",
			"Tailwind CSS",
			"Framer Motion",
		],
		tools: [
			"Git",
			"GitHub",
			"Algolia",
			"Figma",
			"Netlify",
			"Vercel",
			"Render",
			"Firebase",
			"Postman",
			"Azure DevOps",
			"Trello",
		],
	} as const,
};
