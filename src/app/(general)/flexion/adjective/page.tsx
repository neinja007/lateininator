'use client';

import H1 from '@/components/ui/H1';
import Select from '@/components/ui/Select';
import { words } from '@/data/words';
import { lists } from '@/data/lists';
import { Fragment, useEffect, useState } from 'react';
import { Adjective, Case, Comparison, ComparisonDegree, Gender, Numerus, Word } from '@/data/types';
import SelectButton from '@/components/SelectButton';
import Checkbox from '@/components/ui/Checkbox';
import { mapper } from '@/data/mapper';
import { properties } from '@/data/properties';
import Button from '@/components/ui/Button';
import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import Input from '@/components/ui/Input';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import { getForm } from '@/utils/wordUtils';

const Page = () => {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [activeWord, setActiveWord] = useState<Word>();

	const [wordsToCheckInput, setWordsToCheckInput] = useState<string>('');
	const [wordsToCheck, setWordsToCheck] = useState<number>(0);
	const [wordLimit, setWordLimit] = useState<number>(0);

	const [maxUnit, setMaxUnit] = useState(lists.length);
	const [selectedWords, setSelectedWords] = useState<Array<Word>>([]);
	const [possibleWords, setPossibleWords] = useState<Array<Word & Adjective>>([]);
	const [testingType, setTestingType] = useState<'table' | 'individual'>('table');

	const [comparisons, setComparisons] = useState<Array<Comparison>>(properties.comparison);
	const [comparisonDegrees, setComparisonDegrees] = useState<Array<ComparisonDegree>>(properties.comparisonDegree);
	const [genders, setGenders] = useState<Array<Gender>>(properties.gender);
	const [checkAdverb, setCheckAdverb] = useState(true);

	const [individualInputValue, setIndividualInputValue] = useState<string>('');
	const [individualInputForm, setIndividualInputForm] = useState<{
		comparison: Comparison;
		comparisonDegree: ComparisonDegree;
		gender: Gender;
		numerus: Numerus;
		wordCase: Case;
	}>();

	const [tableForm, setTableForm] = useState<Comparison>();
	const [tableValues, setTableValues] = useState<any>();

	useEffect(() => {
		const ids = lists
			.filter((list) => list.id < maxUnit)
			.reduce((acc: any, list) => {
				return acc.concat(list.words);
			}, []);

		const selectedWords: Array<Word & Adjective> = words.filter(
			(word) => ids.includes(word.id) && word.type === 'adjective' && word.comparison !== '-'
		) as Array<Word & Adjective>;
		setSelectedWords(selectedWords);

		const possibleWords = selectedWords.filter(
			(word) => 'comparison' in word && word.comparison !== '-' && comparisons.includes(word.comparison)
		);

		setPossibleWords(possibleWords);
	}, [comparisons, maxUnit]);

	const handleContinue = () => {
		if (stage === 'test') {
			if (!activeWord) {
				throw new Error('activeWord is undefined');
			}

			setStage('review');

			setWordsToCheck((prev) => prev - 1);
		} else {
			if (wordsToCheck === 0) {
				setStage('results');
				return;
			}
			setStage('test');

			const newActiveWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
			setActiveWord(newActiveWord);

			if (testingType === 'individual') {
				setIndividualInputForm({
					comparison: newActiveWord.comparison as Comparison,
					comparisonDegree: comparisonDegrees[Math.floor(Math.random() * comparisonDegrees.length)],
					numerus: (['sin', 'plu'] as Numerus[])[Math.floor(Math.random() * 2)],
					wordCase: (['1', '2', '3', '4', '5'] as Case[])[Math.floor(Math.random() * 5)],
					gender: genders[Math.floor(Math.random() * genders.length)]
				});
			}

			resetInputs();
		}
	};

	useEffect(() => {
		const newWordsToCheck = wordsToCheckInput === '' ? 0 : parseInt(wordsToCheckInput);

		setWordsToCheck(newWordsToCheck);
		setWordLimit(newWordsToCheck);
	}, [wordsToCheckInput]);

	const resetInputs = () => {
		if (testingType === 'individual') {
			setIndividualInputValue('');
		}
	};

	const progressPercentage = ((wordLimit - wordsToCheck) / wordLimit) * 100;

	const start = possibleWords.length > 0 && wordsToCheck > 0;

	return (
		<div className='space-y-5'>
			<H1>Flexionstrainer: Adjektive</H1>
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
							Du hast <b className='text-blue-700'>{selectedWords.length} Adjektive</b> ausgewählt.
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
						<Checkbox checked={checkAdverb} handleChange={() => setCheckAdverb((prev) => !prev)} label={'Adverbien'} />
					</div>
					<div className='grid grid-cols-3'>
						<div>
							Deklination:
							{properties.comparison.map((comparison) => (
								<Checkbox
									key={comparison}
									checked={comparisons.includes(comparison)}
									handleChange={(checked) =>
										setComparisons((prev) => (checked ? [...prev, comparison] : prev.filter((p) => p !== comparison)))
									}
									label={mapper.extended.comparison[comparison]}
								/>
							))}
						</div>
						<div>
							Steigerungsform:
							{properties.comparisonDegree.map((comparisonDegree) => (
								<Checkbox
									key={comparisonDegree}
									checked={comparisonDegrees.includes(comparisonDegree)}
									handleChange={(checked) =>
										setComparisonDegrees((prev) =>
											checked ? [...prev, comparisonDegree] : prev.filter((p) => p !== comparisonDegree)
										)
									}
									label={mapper.extended.comparisonDegree[comparisonDegree]}
								/>
							))}
						</div>
						<div>
							Geschlecht:
							{properties.gender.map((gender) => (
								<Checkbox
									key={gender}
									checked={genders.includes(gender)}
									handleChange={(checked) =>
										setGenders((prev) => (checked ? [...prev, gender] : prev.filter((p) => p !== gender)))
									}
									label={mapper.extended.gender[gender]}
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
							handleChange={(value) =>
								setWordsToCheckInput(
									(!isNaN(parseInt(value))
										? parseInt(value) > 100
											? 100
											: parseInt(value) < 0
											  ? 0
											  : parseInt(value)
										: value === ''
										  ? ''
										  : 0
									).toString()
								)
							}
							value={wordsToCheckInput}
							className={'w-full text-center'}
							type='number'
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
                  ${mapper.extended.gender[individualInputForm.gender]};
                  ${mapper.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${mapper.extended.numerus[individualInputForm.numerus]}
                  ${mapper.extended.case[individualInputForm.wordCase]}
                  `}
								handleChange={setIndividualInputValue}
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
							properties.comparisonDegree.map((comparisonDegree, i) => (
								<Fragment key={i}>
									<p>{mapper.extended.comparisonDegree[comparisonDegree]}</p>
									<table key={i} className='w-full rounded-lg table-fixed overflow-hidden shadow'>
										<thead className='bg-gray-100'>
											<tr>
												<th />
												{properties.gender.map((gender, i) => (
													<th key={i} className='px-3 py-1'>
														{mapper.extended.gender[gender]}
													</th>
												))}
											</tr>
										</thead>
										<tbody>
											{properties.numerus.map((numerus) =>
												properties.case.map((wordCase, i) => (
													<tr key={i} className='border-t'>
														<th className='px-3 py-1 bg-gray-100'>
															{mapper.extended.case[wordCase]} {mapper.extended.numerus[numerus]}
														</th>
														{properties.gender.map((gender, i) => (
															<td key={i} className='px-3 py-1'>
																{getForm(activeWord, { comparisonDegree, gender, numerus, wordCase })}
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
					<ActionBar setStage={setStage} handleContinue={handleContinue} progressPercentage={progressPercentage} />
				</>
			)}
		</div>
	);
};

export default Page;
