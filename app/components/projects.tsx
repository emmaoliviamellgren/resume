import { data } from '../constants/data';
import Heading from './ui/heading';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

interface Props {
	name: string;
	description: string;
	techStack: string[];
	github?: string;
	website?: string;
}

const Project = ({ name, description, techStack, github, website }: Props) => {
	return (
		<div className='flex flex-col'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-0.5 mb-1.5'>
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
				<p className='flex flex-nowrap items-center relative bottom-0.5'>
					{techStack.map((tech, i) => (
						<span
							key={i}
							className='text-[10px] font-medium text-gray-600'>
							{tech}
							{i < techStack.length - 1 && (
								<span className='relative bottom-[1px] text-[8px] mx-2.5'>
									•
								</span>
							)}
						</span>
					))}
				</p>
			</div>
			<p className='paragraph'>{description}</p>
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<Heading heading='Featured Projects' />
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
