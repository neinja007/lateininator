import { MAPPER } from '@/utils/mapper';
import { WORD_CONSTANTS } from '@/constants';
import Link from 'next/link';
import { Fragment } from 'react';
import { getForm } from '@/utils/wordUtils';
import { words } from '@/data/words';
import Header from './components/Header';
import WordInformation from './components/WordInformation';
import TableInformation from './components/TableInformation';
import FormTable from './components/FormTable';
import WordNotFound from './components/WordNotFound';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
	const word = words.find((word) => word.id.toString() === id);
	if (!word) return <WordNotFound />;

	return (
		<div className='space-y-5'>
			<Header word={word} />
			<WordInformation word={word} />
			<hr />
			<TableInformation word={word} />
			{word.type === 'noun' ? (
				<>
					{word.declension !== '-' && word.gender !== '-' ? (
						<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
							<thead className='bg-gray-100'>
								<tr>
									<th />
									{WORD_CONSTANTS.numerus.map((numerus, i) => {
										return (
											<th key={i} className='px-3 py-1'>
												{MAPPER.extended.numerus[numerus]}
											</th>
										);
									})}
								</tr>
							</thead>
							<tbody>
								{WORD_CONSTANTS.wordCase.map((wordCase, i) => {
									return (
										<tr key={i} className='border-t'>
											<th key={i} className='px-3 py-1 bg-gray-100'>
												{MAPPER.extended.wordCase[wordCase]}
											</th>
											{WORD_CONSTANTS.numerus.map((numerus, i) => {
												return (
													<td key={i} className='px-3 py-1'>
														{getForm(word, { wordCase: wordCase, numerus: numerus })}
													</td>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
					) : (
						<p>Tabellen können nicht generiert werden, da dieses Wort nicht ordnungsgemäß dekliniert werden kann.</p>
					)}
				</>
			) : word.type === 'verb' ? (
				<>
					{word.conjugation !== '-' ? (
						<div>
							{WORD_CONSTANTS.modus.map((modus) =>
								WORD_CONSTANTS.voice.map((voice) => (
									<Fragment key={modus + '-' + voice}>
										<p>
											{MAPPER.extended.modus[modus]} {MAPPER.extended.voice[voice]}
										</p>
										<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
											<thead className='bg-gray-100'>
												<tr>
													<th />
													{WORD_CONSTANTS.tense.map((tense, i) => (
														<th key={i} className='px-3 py-1'>
															{MAPPER.extended.tense[tense]}
														</th>
													))}
												</tr>
											</thead>
											<tbody>
												{WORD_CONSTANTS.numerus.map((numerus) =>
													WORD_CONSTANTS.person.map(
														(person, i) =>
															person !== '4' && (
																<tr key={i} className='border-t'>
																	<th className='px-3 py-1 bg-gray-100'>
																		{MAPPER.short.person[person]} {MAPPER.extended.numerus[numerus]}
																	</th>
																	{WORD_CONSTANTS.tense.map(
																		(tense, i) =>
																			(modus === 'ind' || tense !== 'fut1') && (
																				<td key={i} className='px-3 py-1'>
																					{getForm(word, { modus, numerus, person, tense, voice })}
																				</td>
																			)
																	)}
																</tr>
															)
													)
												)}
											</tbody>
										</table>
										<br />
									</Fragment>
								))
							)}
						</div>
					) : (
						<p>Tabellen können nicht generiert werden, da dieses Wort nicht ordnungsgemäß konjugiert werden kann.</p>
					)}
				</>
			) : word.type === 'adjective' ? (
				<>
					{word.comparison !== '-' ? (
						<div>
							<p>{MAPPER.extended.type['adverb']}</p>
							<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
								<thead className='bg-gray-100'>
									<tr>
										{WORD_CONSTANTS.comparisonDegree.map((comparisonDegree, i) => (
											<th key={i} className='px-3 py-1'>
												{MAPPER.extended.comparisonDegree[comparisonDegree]}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr>
										{WORD_CONSTANTS.comparisonDegree.map((comparisonDegree, i) => (
											<th key={i} className='px-3 py-1'>
												{getForm(word, {
													comparisonDegree,
													adverb: true,
													gender: 'm',
													numerus: 'sin',
													wordCase: '1'
												})}
											</th>
										))}
									</tr>
								</tbody>
							</table>
							<br />
							{WORD_CONSTANTS.comparisonDegree.map((comparisonDegree, i) => (
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
																{getForm(word, { comparisonDegree, gender, numerus, wordCase })}
															</td>
														))}
													</tr>
												))
											)}
										</tbody>
									</table>
									<br />
								</Fragment>
							))}
						</div>
					) : (
						<p>Tabellen konnten nicht generiert werden, da dieses Wort nicht ordnungsgemäß dekliniert werden kann.</p>
					)}
				</>
			) : (
				false
			)}
		</div>
	);
};

export default Page;
