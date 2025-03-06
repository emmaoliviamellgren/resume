interface Props {
	heading: string;
}

const Heading = ({ heading }: Props) => {
	return <p className='heading mb-4'>{heading}</p>;
};

export default Heading;
