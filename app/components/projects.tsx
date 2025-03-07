import { data } from '../constants/data';
import Heading from './ui/heading';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

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
			<div className='flex gap-0.5 items-center'>
				<p className='title'>{name}</p>
				{website && (
					<a
						href={website}
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-600 hover:text-gray-800'>
						<MdOutlineArrowOutward />
					</a>
				)}
				{github && (
					<a
						href={github}
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-600 hover:text-gray-800 ml-1'>
						<FaGithub />
					</a>
				)}
			</div>
			<p className='paragraph mt-3'>{description}</p>
			<p className='text-[10px] flex-wrap font-medium text-gray-700 flex gap-x-2 mt-2'>
				{techStack.map((tech, i) => (
					<span
						key={i}
						className='py-1 px-2 bg-gray-200 shadow-sm  ring-white/40 ring-1 rounded-full'>
						{tech}
					</span>
				))}
			</p>
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<Heading heading='Selected Projects' />
			<div className='flex flex-col gap-6'>
				{data.projects.list.map((project, i) => (
					<Project
						key={i}
						{...project}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
