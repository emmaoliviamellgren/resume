import { data } from '../constants/data';
import Heading from './ui/heading';

interface Props {
	name: string;
	description: string;
	techStack: string[];
	github: string;
	website: string;
}

const Project = ({ name, description, techStack, github, website }: Props) => {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex gap-2 items-center'>
				<p className='title'>{name}</p> ⸺
				<p className='title'>{techStack.join(', ')}</p>
			</div>

			<p className='paragraph'>
				{github || website || 'No links available'}
			</p>
			<p className='paragraph mt-3'>{description}</p>
		</div>
	);
};

const Projects = () => {
	return (
		<>
			<Heading heading='Selected Projects' />
			{data.projects.list.map((project, i) => (
				<Project
					key={i}
					{...project}
				/>
			))}
		</>
	);
};

export default Projects;
