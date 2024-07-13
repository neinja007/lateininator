'use client';

import { Adjective, WordCase, Comparison, ComparisonDegree, Gender, Numerus, Word } from '@/types';
import { words } from '@/data/words';
import { lists } from '@/data/lists';
import { Fragment, useEffect, useState } from 'react';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import { getForm } from '@/utils/wordUtils';
import { WORD_CONSTANTS } from '@/constants';
import { isAdjective } from '@/utils/typeguards';
import { MAPPER } from '@/utils/mapper';
import ActionBar from '@/components/ActionBar';
import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import Heading from '@/components/Heading';
import Select from '@/components/Select';
import SelectButton from '@/components/SelectButton';
import WordDisplay from '@/components/WordDisplay';
import Input from '@/components/Input';
import { useStage } from '@/hooks/useStage';
import { useActiveWord } from '@/hooks/useActiveWord';
import { useNumberInput } from '@/hooks/useNumberInput';

const Page = () => {
	const { stage, setStage } = useStage();
	const { activeWord, maxWords, remainingWords, updateActiveWord, updateWords } = useActiveWord(true);

	const [maxUnit, setMaxUnit] = useState(lists.length);

	const [selectedWords, setSelectedWords] = useState<Array<Adjective>>([]);
	const [possibleWords, setPossibleWords] = useState<Array<Adjective>>([]);

	const { inputValue, updateValue, value } = useNumberInput(possibleWords.length);

	const [testingType, setTestingType] = useState<'table' | 'individual'>('table');

	const [comparisons, setComparisons] = useState<Array<Comparison>>([...WORD_CONSTANTS.comparison]);
	const [comparisonDegrees, setComparisonDegrees] = useState<Array<ComparisonDegree>>([
		...WORD_CONSTANTS.comparisonDegree
	]);
	const [genders, setGenders] = useState<Array<Gender>>([...WORD_CONSTANTS.gender]);
	const [checkAdverb, setCheckAdverb] = useState(true);

	const [individualInputValue, setIndividualInputValue] = useState<string>('');
	const [individualInputForm, setIndividualInputForm] = useState<{
		comparison: Comparison;
		comparisonDegree: ComparisonDegree;
		gender: Gender;
		numerus: Numerus;
		wordCase: WordCase;
	}>();

	// const [tableForm, setTableForm] = useState<Comparison>();
	// const [tableValues, setTableValues] = useState<any>();

	useEffect(() => {
		const ids = lists
			.filter((list) => list.id < maxUnit)
			.reduce((acc: any, list) => {
				return acc.concat(list.words);
			}, []);

		const selectedWords: Adjective[] = words.filter(
			(word: Word) => isAdjective(word) && ids.includes(word.id) && word.comparison !== '-'
		) as Adjective[];
		setSelectedWords(selectedWords);

		const possibleWords = selectedWords.filter(
			(word) => 'comparison' in word && word.comparison !== '-' && comparisons.includes(word.comparison)
		);

		setPossibleWords(possibleWords);
	}, [comparisons, maxUnit]);

	useEffect(() => {
		if (testingType === 'individual') {
			activeWord &&
				isAdjective(activeWord) &&
				setIndividualInputForm({
					comparison: activeWord.comparison as Comparison,
					comparisonDegree: comparisonDegrees[Math.floor(Math.random() * comparisonDegrees.length)],
					numerus: (['sin', 'plu'] as Numerus[])[Math.floor(Math.random() * 2)],
					wordCase: (['1', '2', '3', '4', '5'] as WordCase[])[Math.floor(Math.random() * 5)],
					gender: genders[Math.floor(Math.random() * genders.length)]
				});
		}
	}, [activeWord, comparisonDegrees, genders, testingType]);

	useEffect(() => {
		updateWords(possibleWords.slice(0, value));
	}, [possibleWords, updateWords, value]);

	const handleContinue = () => {
		if (stage === 'test') {
			if (!activeWord) {
				throw new Error('activeWord is undefined');
			}

			setStage('review');

			updateWords();
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

	const resetInputs = () => {
		if (testingType === 'individual') {
			setIndividualInputValue('');
		}
	};

	const progressPercentage = ((maxWords - remainingWords) / maxWords) * 100;

	const start = remainingWords > 0;

	return (
		<div className='space-y-5'>
			<Heading>Flexionstrainer: Adjektive</Heading>
			{stage === 'settings' && (
				<>
					<p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
					<div className='flex'>
						<Select
							label='Lektion'
							value={maxUnit}
							handleChange={setMaxUnit}
							options={lists.reduce((acc: any, list) => {
								acc[list.id] = list.name;
								return acc;
							}, {})}
						/>
						<span className='mt-auto mb-1.5 ml-5'>
							Du hast <b className='text-blue-500'>{selectedWords.length} Adjektive</b> ausgewählt.
						</span>
					</div>
					<hr />
					<p>Wähle aus, wie du abgefragt werden möchtest:</p>
					<div className='flex space-x-5'>
						<SelectButton
							className='w-1/2 font-medium'
							active={testingType === 'table'}
							handleClick={() => setTestingType('table')}
							label='Formen mit Tabellen abfragen'
						/>
						<SelectButton
							className='w-1/2 font-medium'
							active={testingType === 'individual'}
							handleClick={() => setTestingType('individual')}
							label='Formen einzeln abfragen'
						/>
					</div>
					<hr />
					<div className='grid grid-cols-3'>
						<p>Wähle aus, was abgefragt werden soll:</p>
						<CheckboxWithLabel
							checked={checkAdverb}
							handleChange={() => setCheckAdverb((prev) => !prev)}
							label={'Adverbien'}
						/>
					</div>
					<div className='grid grid-cols-3'>
						<div>
							Deklination:
							{WORD_CONSTANTS.comparison.map((comparison) => (
								<CheckboxWithLabel
									key={comparison}
									checked={comparisons.includes(comparison)}
									handleChange={(checked) =>
										setComparisons((prev) => (checked ? [...prev, comparison] : prev.filter((p) => p !== comparison)))
									}
									label={MAPPER.extended.comparison[comparison]}
								/>
							))}
						</div>
						<div>
							Steigerungsform:
							{WORD_CONSTANTS.comparisonDegree.map((comparisonDegree) => (
								<CheckboxWithLabel
									key={comparisonDegree}
									checked={comparisonDegrees.includes(comparisonDegree)}
									handleChange={(checked) =>
										setComparisonDegrees((prev) =>
											checked ? [...prev, comparisonDegree] : prev.filter((p) => p !== comparisonDegree)
										)
									}
									label={MAPPER.extended.comparisonDegree[comparisonDegree]}
								/>
							))}
						</div>
						<div>
							Geschlecht:
							{WORD_CONSTANTS.gender.map((gender) => (
								<CheckboxWithLabel
									key={gender}
									checked={genders.includes(gender)}
									handleChange={(checked) =>
										setGenders((prev) => (checked ? [...prev, gender] : prev.filter((p) => p !== gender)))
									}
									label={MAPPER.extended.gender[gender]}
								/>
							))}
						</div>
					</div>
					<hr />
					<div>
						<Input
							label={`Anzahl der abgefragten ${testingType === 'individual' ? 'Formen' : 'Tabellen'} (Empfehlung: ${
								testingType === 'individual' ? '20-40' : '2-4'
							})`}
							onChange={(value) => updateValue(value)}
							value={inputValue}
							className={'w-full text-center'}
						/>
					</div>
					<Button onClick={handleContinue} className='w-full' disabled={!start}>
						<span>{!start ? 'Keine Adjektive verfügbar' : 'Start'}</span>
					</Button>
				</>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && individualInputForm && (
				<>
					<WordDisplay word={activeWord} />
					<hr />
					<div>
						{testingType === 'individual' ? (
							<Input
								label={`
                  ${MAPPER.extended.gender[individualInputForm.gender]};
                  ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${MAPPER.extended.numerus[individualInputForm.numerus]}
                  ${MAPPER.extended.wordCase[individualInputForm.wordCase]}
                  `}
								onChange={(value) => setIndividualInputValue(value)}
								value={
									stage === 'review'
										? getInputWithCorrectValue(individualInputValue, getForm(activeWord, { ...individualInputForm }))
										: individualInputValue
								}
								className={
									'w-full ' +
									(stage === 'review'
										? compareValues(individualInputValue, getForm(activeWord, { ...individualInputForm }))
											? 'bg-green-300 border-none'
											: 'bg-red-300 border-none'
										: '')
								}
								disabled={stage === 'review'}
							/>
						) : (
							WORD_CONSTANTS.comparisonDegree.map((comparisonDegree, i) => (
								<Fragment key={i}>
									<p>{MAPPER.extended.comparisonDegree[comparisonDegree]}</p>
									<table key={i} className='w-full rounded-lg table-fixed overflow-hidden shadow'>
										<thead className='bg-gray-100'>
											<tr>
												<th />
												{WORD_CONSTANTS.gender.map((gender, i) => (
													<th key={i} className='px-3 py-1'>
														{MAPPER.extended.gender[gender]}
													</th>
												))}
											</tr>
										</thead>
										<tbody>
											{WORD_CONSTANTS.numerus.map((numerus) =>
												WORD_CONSTANTS.wordCase.map((wordCase, i) => (
													<tr key={i} className='border-t'>
														<th className='px-3 py-1 bg-gray-100'>
															{MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
														</th>
														{WORD_CONSTANTS.gender.map((gender, i) => (
															<td key={i} className='px-3 py-1'>
																{getForm(activeWord, {
																	comparisonDegree,
																	gender,
																	numerus,
																	wordCase
																})}
															</td>
														))}
													</tr>
												))
											)}
										</tbody>
									</table>
									<br />
								</Fragment>
							))
						)}
					</div>
					<hr />
					<ActionBar handleContinue={handleContinue} progressPercentage={progressPercentage} />
				</>
			)}
		</div>
	);
};

export default Page;
