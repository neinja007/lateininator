import H1 from '@/components/H1';
import TypeIndicator from '@/components/TypeIndicator';
import { Word } from '@/types';
import { getLexicalForm } from '@/utils/wordUtils';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import ui from '@/styles/ui.module.css';
import { clsx } from 'clsx';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
	return (
		<div className='grid grid-cols-3 h-12'>
			<Link className={clsx(ui.basic, 'w-fit')} href={'/vocabulary/dictionary'}>
				<ArrowLeft size={20} className='inline align-text-top' /> Zurück zum Wörterbuch
			</Link>
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
