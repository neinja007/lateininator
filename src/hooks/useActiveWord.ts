import { Word } from '@/types';
import { stat } from 'fs';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export const useActiveWord = (
	staticPossibleWords: boolean
): {
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
		if (!staticPossibleWords) {
			setRemainingWords(possibleWords.length);
		}
	}, [possibleWords, staticPossibleWords]);

	const updateActiveWord = () => {
		setActiveWord(possibleWords[Math.floor(Math.random() * possibleWords.length)]);
	};

	const updatePossibleWords = (words?: Word[]): void => {
		if (!words && staticPossibleWords) {
			throw new Error('Cannot subtract from possibleWords if the words are static');
		}
		if (words) {
			setPossibleWords(words);
			if (!staticPossibleWords) {
				setMaxWords(words.length);
				setRemainingWords(words.length);
			}
		} else {
			setPossibleWords((prev) => prev.filter((word) => word.id !== activeWord?.id));
		}
	};

	const updateRemainingWords = (count?: number) => {
		if (!count && !staticPossibleWords) {
			throw new Error('Cannot subtract from remainingWords if the words are not static');
		}
		if (count !== undefined) {
			if (staticPossibleWords) {
				setRemainingWords(count);
				setMaxWords(count);
			} else {
				if (count > possibleWords.length)
					throw new Error('Cannot set remainingWords to a number higher than the length of possibleWords');
				setPossibleWords((prev) => prev.slice(0, count));
			}
		} else {
			setPossibleWords((prev) => prev.filter((word) => word.id !== activeWord?.id));
		}
	};

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
