import { data } from '../constants/data';

const Contact = () => {
	const { email, linkedin, github, website } = data.contact;

	return (
		<p className='paragraph flex flex-col gap-0.5 mt-[14px]'>
			<a href={`mailto:${email}`}>mellgrenemma0@gmail.com</a>
			<a href={linkedin}>linkedin.com/in/emmamellgren</a>
			<a href={github}>github.com/emmaoliviamellgren</a>
			<a href={website}>emmamellgren.vercel.app</a>
		</p>
	);
};

export default Contact;
