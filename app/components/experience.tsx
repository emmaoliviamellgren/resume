import React from 'react';
import { data } from '../constants/data';
import Heading from './ui/heading';

const Experience = () => {
	const { position, company, duration, description } = data.experience;

	return (
		<div>
			<Heading heading='Relevant Experience' />
			<div className='flex flex-col gap-1'>
				<div className='flex gap-2 items-center'>
					<p className='title'>{position}</p> ⸺
					<p className='title'>{company}</p>
				</div>

				<p className='paragraph'>{duration}</p>
				<p className='paragraph mt-3'>{description.text}</p>
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
