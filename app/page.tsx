import Experience from './components/experience';
import Projects from './components/projects';
import Header from './components/ui/header';

const indexPage = () => {
	return (
		<main className='flex flex-row w-full max-w-4xl gap-24 mx-auto'>
			<aside className='flex flex-col w-[60%]'>
				<Header />
				<Experience />
				<Projects />
			</aside>
			<aside className='flex flex-col w-[40%]'>
			</aside>
		</main>
	);
};

export default indexPage;
