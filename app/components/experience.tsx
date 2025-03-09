import React from 'react';
import { data } from '../constants/data';
import Heading from './ui/heading';

const Experience = () => {
	const { position, company, duration, description } = data.experience;

	return (
		<div>
			<Heading heading='Relevant Experience' />
			<div className='flex flex-col'>
				<div className='flex gap-2 items-center'>
					<p className='title'>{position}</p>
					<span className='relative bottom-[2.75px]'>⸺</span>
					<p className='title'>{company}</p>
				</div>

				<div className='flex gap-2 items-center'>
					<p className='paragraph'>{duration}</p>
					<span className='relative bottom-[1px] text-[8px]'>•</span>
					<p className='paragraph'>Internship</p>
				</div>
				<p className='paragraph mt-2 mb-1.5'>{description.text}</p>
				<ul>
					{description.responsibilities.map((responsibility, i) => (
						<li
							key={i}
							className='list-disc list-inside paragraph'>
							{responsibility}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Experience;
