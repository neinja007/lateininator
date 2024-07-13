type ResultCountProps = {
	count: number;
	query: string;
	limitResults: boolean;
	setLimitResults: (limitResults: boolean) => void;
};

export const ResultCount = ({ count, query, limitResults, setLimitResults }: ResultCountProps) => {
	return (
		<div className='inline-block'>
			Wir haben{' '}
			<b className='text-blue-500'>
				{count === 30 ? 'über 30' : count} {count === 1 ? 'Ergebnis' : 'Ergebnisse'}
			</b>{' '}
			für <i className='text-blue-500'>{query.trim()}</i> gefunden
			{limitResults && ', von denen die ersten 30 angezeigt werden'}.{' '}
			<button className='text-blue-500 underline' onClick={() => setLimitResults(!limitResults)}>
				{limitResults ? 'Alle Ergebnisse anzeigen' : 'Ergebnisse auf 30 beschränken'}
			</button>
		</div>
	);
};
