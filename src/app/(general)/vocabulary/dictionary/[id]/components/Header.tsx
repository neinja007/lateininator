import H1 from '@/components/H1';
import TypeIndicator from '@/components/TypeIndicator';
import { Word } from '@/types';
import { getLexicalForm } from '@/utils/wordUtils';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
	return (
		<div className='grid grid-cols-3'>
			<div className='float-start'>
				<Link href={'/vocabulary/dictionary'} className='text-gray-500 hover:text-blue-500'>
					<ArrowLeft size={20} className='inline align-text-top' /> Zurück zum Wörterbuch
				</Link>
			</div>
			<H1>
				{word.word} {getLexicalForm(word)}
			</H1>
			<div className='text-right'>
				<TypeIndicator type={word.type} />
			</div>
		</div>
	);
};

export default Header;
