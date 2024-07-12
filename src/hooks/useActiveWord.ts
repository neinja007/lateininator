import { Word } from '@/types';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export const useActiveWord = (
	staticPossibleWords: boolean
): {
	activeWord: Word | undefined;
	remainingWords: number;
	maxWords: number;
	updateActiveWord: () => void;
	updateWords: (arg?: Word[]) => void;
} => {
	const [possibleWords, setPossibleWords] = useState<Word[]>([]);
	const [activeWord, setActiveWord] = useState<Word>();
	const [remainingWords, setRemainingWords] = useState<number>(0);
	const [maxWords, setMaxWords] = useState<number>(0);

	useEffect(() => {
		if (!staticPossibleWords) {
			setRemainingWords(possibleWords.length);
		}
	}, [possibleWords, staticPossibleWords]);

	const updateActiveWord = () => {
		setActiveWord(possibleWords[Math.floor(Math.random() * possibleWords.length)]);
	};

	const updateWords = (words?: Word[]) => {
		if (words) {
			setPossibleWords(words);
			setMaxWords(words.length);
		} else {
			if (!staticPossibleWords) {
				setPossibleWords((prev) => prev.filter((word) => word.id !== activeWord?.id));
			} else {
				setRemainingWords((prev) => prev - 1);
			}
		}
	};

	return {
		activeWord,
		remainingWords,
		maxWords,
		updateActiveWord,
		updateWords
	};
};
