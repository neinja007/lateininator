'use client';

import { APP_CONSTANTS } from '@/constants';
import { Word, WordProperty } from '@/types';
import { useState } from 'react';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Settings from './components/Settings';
import { useStage } from '@/hooks/useStage';
import Test from './components/Test';

const Page = () => {
	const { stage, setStage } = useStage();

	const [checkType, setCheckType] = useState<'all' | 'limited'>('all');
	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);

	const [wordsToCheck, setWordsToCheck] = useState<Word[]>([]);

	const [wordPropertiesToCheck, setWordPropertiesToCheck] = useState<Array<WordProperty>>([
		...APP_CONSTANTS.allWordProperties
	]);

	const [checkTranslation, setCheckTranslation] = useState<boolean>(true);

	return (
		<div className='space-y-5'>
			<Heading>Vokabeltrainer</Heading>
			{stage === 'settings' && (
				<Settings
					checkTranslation={checkTranslation}
					setCheckTranslation={setCheckTranslation}
					wordPropertiesToCheck={wordPropertiesToCheck}
					setWordPropertiesToCheck={setWordPropertiesToCheck}
					checkType={checkType}
					setCheckType={setCheckType}
					checkIncorrectWordsAgain={checkIncorrectWordsAgain}
					setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
					updateWords={setWordsToCheck}
					start={() => setStage('test')}
					enableStart={wordsToCheck.length > 0}
				/>
			)}
			{(stage === 'test' || stage === 'review') && (
				<Test
					stage={stage}
					checkTranslation={checkTranslation}
					checkIncorrectWordsAgain={checkIncorrectWordsAgain}
					wordPropertiesToCheck={wordPropertiesToCheck}
					wordsToCheck={wordsToCheck}
					setStage={setStage}
				/>
			)}
			{stage === 'results' && (
				<>
					<p>Es wurden einige verschiedene Wörter abgefragt.</p>
					<Button onClick={() => setStage('settings')}>Neu Laden</Button>
				</>
			)}
		</div>
	);
};

export default Page;
