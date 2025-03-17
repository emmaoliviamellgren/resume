'use client';

import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import TechStack from './components/techStack';
import Header from './components/ui/header';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const IndexPage = () => {
	const contentRef = useRef<HTMLDivElement>(null);
	const reactToPrintFn = useReactToPrint({
		contentRef: contentRef,
		documentTitle: 'Resume.pdf',
	});
	return (
		<>
			<main
				ref={contentRef}
				className='flex flex-row w-full gap-x-14 -ml-4 -mr-8'>
				<aside className='flex flex-col gap-8 w-[70%]'>
					<Header />
					<Experience />
					<Projects />
				</aside>
				<aside className='flex flex-col gap-8 w-[35%]'>
					<Contact />
					<Education />
					<TechStack />
				</aside>
			</main>

			{/* ------ Only for downloading purposes ------ */}
			<button
				onClick={() => reactToPrintFn()}
				className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
				Download as PDF
			</button>
		</>
	);
};

export default IndexPage;
