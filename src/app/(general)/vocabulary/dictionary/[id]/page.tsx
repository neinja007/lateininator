import H1 from '@/components/ui/H1';
import TypeIndicator from '@/components/TypeIndicator';
import { mapper } from '@/data/mapper';
import { properties } from '@/data/properties';
import { words } from '@/data/words';
import { getForm, getLexicalForm } from '@/utils/wordUtils';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import { Fragment } from 'react';
import { capitalizeFirstLetter } from '@/utils/inputUtils';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
	const word = words.find((word) => word.id.toString() === id);

	return (
		<div>
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
					<p>{word.translation?.map((translation) => capitalizeFirstLetter(translation)).join(', ')}</p>
					{word.type === 'noun' ? (
						<>
							<p>
								{mapper.extended.declension[word.declension]}; {mapper.extended.gender[word.gender]}
							</p>
							<hr />
							<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
								<thead className='bg-gray-100'>
									<tr>
										<th />
										{properties.numerus.map((numerus, i) => {
											return (
												<th key={i} className='px-3 py-1'>
													{mapper.extended.numerus[numerus]}
												</th>
											);
										})}
									</tr>
								</thead>
								<tbody>
									{properties.case.map((wordCase, i) => {
										return (
											<tr key={i} className='border-t'>
												<th key={i} className='px-3 py-1 bg-gray-100'>
													{mapper.extended.case[wordCase]}
												</th>
												{properties.numerus.map((numerus, i) => {
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
						</>
					) : word.type === 'verb' ? (
						<>
							<p>{mapper.extended.conjugation[word.conjugation]}</p>
							<hr />
							<div className='space-y-2'>
								{properties.modus.map((modus) =>
									properties.voice.map((voice, i) => (
										<Fragment key={i}>
											<p>
												{mapper.extended.modus[modus]} {mapper.extended.voice[voice]}
											</p>
											<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
												<thead className='bg-gray-100'>
													<tr>
														<th />
														{properties[modus === 'ind' ? 'indTense' : 'konTense'].map((tense, i) => (
															<th key={i} className='px-3 py-1'>
																{mapper.extended.tense[tense]}
															</th>
														))}
													</tr>
												</thead>
												<tbody>
													{properties.numerus.map((numerus) =>
														properties.person.map((person, i) => (
															<tr key={i} className='border-t'>
																<th className='px-3 py-1 bg-gray-100'>
																	{mapper.short.person[person]} {mapper.extended.numerus[numerus]}
																</th>
																{properties[modus === 'ind' ? 'indTense' : 'konTense'].map((tense, i) => (
																	<td key={i} className='px-3 py-1'>
																		{getForm(word, { modus, numerus, person, tense, voice })}
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
						</>
					) : word.type === 'adjective' ? (
						<>
							<p>{mapper.extended.comparison[word.comparison]}</p>
							<hr />
							<div className='space-y-2'>
								<p>{mapper.extended.type['adverb']}</p>
								<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
									<thead className='bg-gray-100'>
										<tr>
											{properties.comparisonDegree.map((comparisonDegree, i) => (
												<th key={i} className='px-3 py-1'>
													{mapper.extended.comparisonDegree[comparisonDegree]}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										<tr>
											{properties.comparisonDegree.map((comparisonDegree, i) => (
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
								{properties.comparisonDegree.map((comparisonDegree, i) => (
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
