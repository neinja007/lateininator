type WordInfoProps = { info: string };

const WordInfo = ({ info }: WordInfoProps) => {
  return <p className='float-end rounded-lg border border-gray-600 bg-gray-100 p-1 px-3 text-black'>{info}</p>;
};

export default WordInfo;
