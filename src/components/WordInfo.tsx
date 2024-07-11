type WordInfoProps = { info: string };

const WordInfo = ({ info }: WordInfoProps) => {
	return <p className='float-end border border-gray-600 bg-gray-100 px-3 p-1 rounded-lg'>{info}</p>;
};

export default WordInfo;
