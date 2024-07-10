import Link from 'next/link';

const WordNotFound = () => {
	return (
		<span>
			Wort nicht gefunden.{' '}
			<Link href={'/vocabulary/dictionary'} className='text-blue-500 underline'>
				Zum Wörterbuch
			</Link>
		</span>
	);
};

export default WordNotFound;
