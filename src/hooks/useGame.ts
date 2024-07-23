import { Stage, Word } from '@/types';
import { useCallback, useEffect, useState } from 'react';

export const useGame = (
  staticPossibleWords: boolean,
  resetInputs: () => void,
  canContinue?: (word: Word) => boolean
): {
  activeWord: Word | undefined;
  remainingWords: number;
  maxWords: number;
  updateWords: (count?: Word[], number?: number) => void;
  handleContinue: (stage?: Stage) => void;
  stage: Stage;
} => {
  const [possibleWords, setPossibleWords] = useState<Word[]>([]);
  const [activeWord, setActiveWord] = useState<Word>();
  const [remainingWords, setRemainingWords] = useState<number>(0);
  const [maxWords, setMaxWords] = useState<number>(0);
  const [stage, setStage] = useState<Stage>('settings');

  const updateActiveWord = useCallback(() => {
    setActiveWord(possibleWords[Math.floor(Math.random() * possibleWords.length)]);
  }, [possibleWords]);

  useEffect(() => {
    if (!staticPossibleWords) {
      setRemainingWords(possibleWords.length);
    }
  }, [possibleWords, staticPossibleWords]);

  const handleContinue = (newStage?: Stage) => {
    if (newStage) {
      setStage(newStage);
      return;
    } else {
      newStage = stage;
    }
    if (newStage === 'test') {
      if (!activeWord) {
        throw new Error('activeWord is undefined');
      }

      setStage('review');

      if (staticPossibleWords || (canContinue && canContinue(activeWord))) {
        updateWords();
      }
    } else {
      if (remainingWords === 0) {
        setStage('results');
        return;
      }
      setStage('test');

      updateActiveWord();
      resetInputs();
    }
  };

  const updateWords = useCallback(
    (words?: Word[], count?: number) => {
      if (words) {
        setPossibleWords(words);
        if (!staticPossibleWords) {
          setMaxWords(words.length);
          setRemainingWords(words.length);
        } else {
          if (count !== undefined) {
            if (possibleWords.length === 0) count = 0;
            setMaxWords(count);
            setRemainingWords(count);
          } else {
            throw new Error('count is undefined');
          }
        }
      } else {
        if (!staticPossibleWords) {
          setPossibleWords((prev) => prev.filter((word) => word.id !== activeWord?.id));
        } else {
          setRemainingWords((prev) => prev - 1);
        }
      }
    },
    [activeWord?.id, possibleWords.length, staticPossibleWords]
  );

  return {
    activeWord,
    remainingWords,
    maxWords,
    stage,
    updateWords,
    handleContinue
  };
};
