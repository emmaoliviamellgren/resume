"use client";

import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import TechStack from "./components/techStack";
import Header from "./components/ui/header";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const IndexPage = () => {
	const contentRef = useRef<HTMLDivElement>(null);
	const reactToPrintFn = useReactToPrint({
		contentRef: contentRef,
		documentTitle: "Resume.pdf",
	});
	return (
		<>
			<main
				ref={contentRef}
				className="flex flex-row w-full gap-x-14 p-10">
				<aside className="flex flex-col gap-8 w-[55%]">
					<Header />
					<Experience />
				</aside>
				<aside className="flex flex-col gap-8 w-[45%]">
					<Contact />
					<TechStack />
					<Projects />
					<Education />
				</aside>
			</main>

			{/* ------ Only for downloading purposes ------ */}
			<button
				onClick={() => reactToPrintFn()}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
				Download as PDF
			</button>
		</>
	);
};

export default IndexPage;
