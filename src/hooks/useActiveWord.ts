import { Word } from '@/types';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export const useActiveWord = (): {
	activeWord: Word | undefined;
	updateActiveWord: (arg: boolean) => void;
	possibleWords: Word[];
	updatePossibleWords: (arg?: Word[]) => void;
	remainingWords: number;
	updateRemainingWords: () => void;
	maxWords: number;
} => {
	const [possibleWords, setPossibleWords] = useState<Word[]>([]);
	const [activeWord, setActiveWord] = useState<Word>();

	const [remainingWords, setRemainingWords] = useState<number>(0);
	const [maxWords, setMaxWords] = useState<number>(0);

	useEffect(() => {
		setRemainingWords(maxWords);
	}, [maxWords]);

	useEffect(() => {
		setRemainingWords(possibleWords.length);
	}, [possibleWords]);

	const updateActiveWord = () => {
		setActiveWord(possibleWords[Math.floor(Math.random() * possibleWords.length)]);
	};

	const updatePossibleWords = useCallback(
		(words?: Word[]) => {
			if (words) {
				setPossibleWords(words);
				setMaxWords(words.length);
			}
			setPossibleWords((prev) => prev.filter((word) => word.id !== activeWord?.id));
		},
		[activeWord?.id]
	);

	const updateRemainingWords = () => setRemainingWords((prev) => prev - 1);

	return {
		activeWord,
		possibleWords,
		updatePossibleWords,
		updateActiveWord,
		remainingWords,
		updateRemainingWords,
		maxWords
	};
};
