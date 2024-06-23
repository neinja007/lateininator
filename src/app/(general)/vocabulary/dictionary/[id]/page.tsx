import TypeIndicator from '@/components/specific/dictionary/TypeIndicator';
import Header from '@/components/ui/Header';
import { mapper } from '@/data/mapper';
import { properties } from '@/data/properties';
import { words } from '@/data/words';
import { getForm, getLexicalForm } from '@/utils/wordUtils';
import Link from 'next/link';

function Page({ params: { id } }: { params: { id: string } }) {
	const word = words.find((word) => word.id.toString() === id);

	return (
		<div>
			{word?.word ? (
				<>
					<Header>Wörterbuch</Header>
					<div>
						{word.word} {getLexicalForm(word)}{' '}
						<span>
							<TypeIndicator type={word.type} />
						</span>
					</div>
					<p>{word.translation?.join(', ')}</p>
					{(word.type === 'noun' && (
						<>
							<p>
								{mapper.declension[word.declension]}; {mapper.gender[word.gender]}
							</p>
							<div>
								<table>
									<thead>
										<tr>
											<th />
											{properties.numerus.map((numerus, i) => {
												return <th key={i}>{mapper.numerus[numerus]}</th>;
											})}
										</tr>
									</thead>
									<tbody>
										{properties.case.map((wordCase, i) => {
											return (
												<tr key={i}>
													<th key={i}>{mapper.case[wordCase]}</th>
													{properties.numerus.map((numerus, i) => {
														return <td key={i}>{getForm(word, { wordCase: wordCase, numerus: numerus })}</td>;
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
								<p>{mapper.conjugation[word.conjugation]}</p>
								<div>
									{properties.modus.map((modus) =>
										properties.voice.map((voice, i) => (
											<table key={i}>
												<thead>
													<tr>
														<th />
														{properties[modus === 'ind' ? 'indTense' : 'konTense'].map((tense, i) => (
															<th key={i}>{mapper.tense[tense]}</th>
														))}
													</tr>
												</thead>
												<tbody>
													{properties.numerus.map((numerus) =>
														properties.person.map((person, i) => (
															<tr key={i}>
																<th>
																	{mapper.person[person]} {mapper.numerus[numerus]}
																</th>
																{properties[modus === 'ind' ? 'indTense' : 'konTense'].map((tense, i) => (
																	<td key={i}>{getForm(word, { modus, numerus, person, tense, voice })}</td>
																))}
															</tr>
														))
													)}
												</tbody>
											</table>
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
