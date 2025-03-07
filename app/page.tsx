import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import TechStack from './components/techStack';
import Header from './components/ui/header';

const indexPage = () => {
	return (
		<main className='flex flex-row w-full max-w-4xl gap-x-24 mx-auto'>
			<aside className='flex flex-col gap-8 w-[70%]'>
				<Header />
				<Experience />
				<Projects />
			</aside>
			<aside className='flex flex-col gap-8 w-[30%]'>
				<Contact />
				<Education />
				<TechStack />
			</aside>
		</main>
	);
};

export default indexPage;
