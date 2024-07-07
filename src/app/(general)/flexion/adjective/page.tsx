'use client';

import H1 from '@/components/ui/H1';
import Select from '@/components/ui/Select';
import { words } from '@/data/words';
import { lists } from '@/data/lists';
import { useEffect, useState } from 'react';
import { Comparison, ComparisonDegree, Gender, Word, Words } from '@/data/types';
import SelectButton from '@/components/SelectButton';
import Checkbox from '@/components/ui/Checkbox';
import { mapper } from '@/data/mapper';
import { properties } from '@/data/properties';
import Button from '@/components/ui/Button';

const Page = () => {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [activeWord, setActiveWord] = useState<Word>();
	const [maxWords, setMaxWords] = useState<number>(0);

	const [maxUnit, setMaxUnit] = useState(0);
	const [selectedWords, setSelectedWords] = useState<Array<Word>>([]);

	const [comparisons, setComparisons] = useState<Array<Comparison>>(properties.comparison);
	const [comparisonDegrees, setComparisonDegrees] = useState<Array<ComparisonDegree>>(properties.comparisonDegree);
	const [genders, setGenders] = useState<Array<Gender>>(properties.gender);

	const [checkAdverb, setCheckAdverb] = useState(true);

	const [testingType, setTestingType] = useState<'table' | 'individual'>('table');

	useEffect(() => {
		const ids = lists
			.filter((list) => list.id < maxUnit)
			.reduce((acc: any, list) => {
				return acc.concat(list.words);
			}, []);
		console.log(ids);
		setSelectedWords(words.filter((word) => ids.includes(word.id) && word.type === 'adjective'));
	}, [maxUnit]);

	const handleContinue = () => {
		if (stage === 'test') {
			if (!activeWord) {
				throw new Error('activeWord is undefined');
			}
		} else {
			if (remainingWords.length === 0) {
				setStage('results');
				return;
			}
			setStage('test');

			setActiveWord(remainingWords[Math.floor(Math.random() * remainingWords.length)]);
		}
	};

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
							Deklinationen:
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
							Steigerungsformen:
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
							Geschlechter:
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
					<Button onClick={handleContinue} className='w-full'>
						Start
					</Button>
				</>
			)}
		</div>
	);
};

export default Page;
