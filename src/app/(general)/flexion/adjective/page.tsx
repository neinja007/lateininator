'use client';
import { useState } from 'react';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { TableInputValues } from './types';
import { ComparisonDegree, Gender } from '@/types/wordConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { isAdjective } from '@/utils/typeguards/isAdjective';

const initialTableInputValues: TableInputValues = {
  ...(WORD_CONSTANTS.gender.reduce(
    (acc, cur) => ({ ...acc, [cur]: WORD_CONSTANTS.wordCase.reduce((acc, cur) => ({ ...acc, [cur]: '' }), {}) }),
    {}
  ) as TableInputValues),
  adverb: ''
};

const Page = () => {
  const [testingType, setTestingType] = useState<'table' | 'individual'>('table');
  const { activeWord, maxWords, remainingWords, updateWords, stage, handleContinue, currentSettingsStage } = useGame(
    true,
    testingType === 'individual'
      ? () => setIndividualInputValue('')
      : () => setTableInputValues(initialTableInputValues),
    3
  );

  const [comparisonDegrees, setComparisonDegrees] = useState<ComparisonDegree[]>([...WORD_CONSTANTS.comparisonDegree]);
  const [genders, setGenders] = useState<Gender[]>([...WORD_CONSTANTS.gender]);
  const [checkAdverb, setCheckAdverb] = useState(true);

  const [tableInputValues, setTableInputValues] = useState<TableInputValues>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Adjektive</Heading>
      {stage === 'settings' && (
        <Settings
          currentSettingsStage={currentSettingsStage}
          testingType={testingType}
          setTestingType={setTestingType}
          checkAdverb={checkAdverb}
          setCheckAdverb={setCheckAdverb}
          comparisonDegrees={comparisonDegrees}
          setComparisonDegrees={setComparisonDegrees}
          genders={genders}
          setGenders={setGenders}
          handleContinue={handleContinue}
          updateWords={updateWords}
          remainingWords={remainingWords}
        />
      )}
      {(stage === 'test' || stage === 'review') && activeWord && isAdjective(activeWord) && (
        <Test
          activeWord={activeWord}
          testingType={testingType}
          stage={stage}
          tableInputValues={tableInputValues}
          setTableInputValues={setTableInputValues}
          maxWords={maxWords}
          remainingWords={remainingWords}
          handleContinue={handleContinue}
          comparisonDegrees={comparisonDegrees}
          genders={genders}
          checkAdverb={checkAdverb}
          individualInputValue={individualInputValue}
          setIndividualInputValue={setIndividualInputValue}
        />
      )}
      {stage === 'results' && <Results handleContinue={handleContinue} />}
    </div>
  );
};

export default Page;
