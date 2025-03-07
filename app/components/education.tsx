import React from 'react';
import Heading from './ui/heading';
import { data } from '../constants/data';

const Education = () => {
	const { program, school, duration, description } = data.education;
	return (
		<div>
			<Heading heading='Education' />
			<div className='flex flex-col gap-1'>
				<div className='flex gap-2 items-center'>
					<p className='title'>{program}</p> ⸺
					<p className='title'>{school}</p>
				</div>
				<p className='paragraph'>{duration}</p>
                <p className='paragraph mt-3'>{description}</p>
			</div>
		</div>
	);
};

export default Education;
