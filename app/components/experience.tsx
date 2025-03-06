import React from 'react';
import { data } from '../constants/data';

const Experience = () => {
	return (
		<div className='flex flex-col gap-4 my-12'>
			<p className='title'>{data.experience.company}</p>
            <p className='paragraph'>{data.experience.position}</p>
            <p className='paragraph'>{data.experience.duration}</p>
            <p className='paragraph w-96'>{data.experience.description}</p>
		</div>
	);
};

export default Experience;
