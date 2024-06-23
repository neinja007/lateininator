import H1 from '@/components/navbar/ui/H1';
import TypeIndicator from '@/components/specific/dictionary/TypeIndicator';
import { mapper } from '@/data/mapper';
import { properties } from '@/data/properties';
import { words } from '@/data/words';
import { getForm, getLexicalForm } from '@/utils/wordUtils';
import Link from 'next/link';

function Page({ params: { id } }: { params: { id: string } }) {
	const word = words.find((word) => word.id.toString() === id);

	return (
		<div className='w-2/3 mx-auto'>
			{word?.word ? (
				<>
					<div className='float-end'>
						<TypeIndicator type={word.type} />
					</div>
					<H1>
						{word.word} {getLexicalForm(word)}
					</H1>
					<p>{word.translation?.join(', ')}</p>
					{(word.type === 'noun' && (
						<>
							<p>
								{mapper.extended.nounDeclension[word.declension]}; {mapper.extended.gender[word.gender]}
							</p>
							<div>
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
												<tr key={i} className='border-y'>
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
							</div>
						</>
					)) ||
						(word.type === 'verb' && (
							<>
								<p>{mapper.extended.conjugation[word.conjugation]}</p>
								<div className='space-y-2'>
									{properties.modus.map((modus) =>
										properties.voice.map((voice, i) => (
											<>
												<p>
													{mapper.extended.modus[modus]} {mapper.extended.voice[voice]}
												</p>
												<table key={i} className='w-full table-fixed border shadow'>
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
																<tr key={i} className='border-y'>
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
											</>
										))
									)}
								</div>
							</>
						))}
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
}

export default Page;
