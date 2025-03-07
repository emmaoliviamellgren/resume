import React from 'react';
import Heading from './ui/heading';
import { data } from '../constants/data';

const Education = () => {
	const { program, school, duration, description } = data.education;
	return (
		<div>
			<Heading heading='Education' />
			<div className='flex flex-col'>
				<div className='flex gap-2 items-center'>
					<p className='title'>{program}</p>
					<span className='mb-0.5'>⸺</span>
					<p className='title'>{school}</p>
				</div>
				<p className='paragraph'>{duration}</p>
				<p className='paragraph mt-2'>{description}</p>
			</div>
		</div>
	);
};

export default Education;
