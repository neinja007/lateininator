import { MAPPER } from '@/utils/mapper';
import { WORD_CONSTANTS } from '@/constants';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import { Fragment } from 'react';
import { getForm, getLexicalForm } from '@/utils/wordUtils';
import { capitalizeFirstLetter } from '@/utils/inputUtils';
import { words } from '@/data/words';
import H1 from '@/components/H1';
import TypeIndicator from '@/components/TypeIndicator';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
	const word = words.find((word) => word.id.toString() === id);

	return (
		<div className='space-y-5'>
			{word?.word ? (
				<>
					<div className='grid grid-cols-3'>
						<div className='float-start'>
							<Link href={'/vocabulary/dictionary'} className='text-gray-500 hover:text-blue-500'>
								<ArrowLeft size={20} className='inline align-text-top' /> Zurück zum Wörterbuch
							</Link>
						</div>
						<H1>
							{word.word} {getLexicalForm(word)}
						</H1>
						<div className='text-right'>
							<TypeIndicator type={word.type} />
						</div>
					</div>
					<div className='grid grid-cols-3'>
						<p>
							{word.translation
								? word.translation.length === 1
									? 'Übersetzung: '
									: 'Übersetzungen: '
								: 'Keine Übersetzung'}
							{word.translation?.map((translation) => capitalizeFirstLetter(translation)).join(', ')}
						</p>
						<p>
							{word.derivative && (
								<span>
									Abwandlung von{' '}
									<Link href={`/vocabulary/dictionary/${word.derivative}`} className='text-blue-500 underline'>
										{words.find((parent) => parent.id == word.derivative)?.word}
									</Link>
								</span>
							)}
						</p>
						{word.info && (
							<p className='float-end border border-gray-600 bg-gray-100 px-3 p-1 rounded-lg'>{word.info}</p>
						)}
					</div>
					{word.type === 'noun' ? (
						<>
							<hr />
							<p className='text-center'>
								{word.declension === '-' ? 'Keine Deklination' : MAPPER.extended.declension[word.declension]};{' '}
								{word.gender === '-' ? 'Kein Geschlecht' : MAPPER.extended.gender[word.gender]}
							</p>
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
								<p>
									Tabellen können nicht generiert werden, da dieses Wort nicht ordnungsgemäß dekliniert werden kann.
								</p>
							)}
						</>
					) : word.type === 'verb' ? (
						<>
							<hr />
							<p className='text-center'>
								{word.conjugation === '-' ? 'Keine Konjugation' : MAPPER.extended.conjugation[word.conjugation]}
							</p>
							{word.conjugation !== '-' ? (
								<div>
									{WORD_CONSTANTS.modus.map((modus) =>
										WORD_CONSTANTS.voice.map((voice, i) => (
											<Fragment key={i}>
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
															WORD_CONSTANTS.person.map((person, i) => (
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
															))
														)}
													</tbody>
												</table>
												<br />
											</Fragment>
										))
									)}
								</div>
							) : (
								<p>
									Tabellen können nicht generiert werden, da dieses Wort nicht ordnungsgemäß konjugiert werden kann.
								</p>
							)}
						</>
					) : word.type === 'adjective' ? (
						<>
							<hr />
							<p className='text-center'>
								{word.comparison === '-' ? 'Keine Deklination' : MAPPER.extended.comparison[word.comparison]}
							</p>
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
								<p>
									Tabellen konnten nicht generiert werden, da dieses Wort nicht ordnungsgemäß dekliniert werden kann.
								</p>
							)}
						</>
					) : (
						false
					)}
				</>
			) : (
				<span>
					Wort nicht gefunden.{' '}
					<Link href={'/vocabulary/dictionary'} className='text-blue-500 underline'>
						Zum Wörterbuch
					</Link>
				</span>
			)}
		</div>
	);
};

export default Page;
