import { data } from '../constants/data';
import Heading from './ui/heading';

const TechStack = () => {
	const { languages, libraries, tools } = data.techStack;

	return (
		<div>
			<Heading heading='Tech Stack' />
			<div className='flex flex-col gap-4'>
				<div>
					<p className='title'>Languages</p>
					<p className='paragraph mt-1.5'>{languages.join(', ')}</p>
				</div>
				<div>
					<p className='title'>
						Libraries, Frameworks & Environments
					</p>
					<p className='paragraph mt-1.5'>{libraries.join(', ')}</p>
				</div>
				<div>
					<p className='title'>Tools & Platforms</p>
					<p className='paragraph mt-1.5'>{tools.join(', ')}</p>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
