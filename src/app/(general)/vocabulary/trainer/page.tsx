'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/navbar/ui/H1';
import { lists } from '@/data/lists';
import { Words, List } from '@/data/types';
import { useState } from 'react';

function Page() {
	const [stage, setStage] = useState<'settings' | 'testing' | 'results'>('settings');
	const [words, setWords] = useState<Words>([]);
	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);

	function toggleList(list: List) {
		if (selectedLists.includes(list)) {
			setSelectedLists((prevSelectedLists) => prevSelectedLists.filter((prevList) => prevList.name !== list.name));
		} else {
			setSelectedLists((prevSelectedLists) => [...prevSelectedLists, list]);
		}
	}

	return (
		<div>
			<H1>Vokabeltrainer</H1>
			{stage === 'settings' && (
				<>
					<p>Wähle aus, welche Wörter du lernen möchtest:</p>
					<div className='flex space-x-3 justify-center'>
						{lists.map((list, i) => (
							<SelectButton
								key={i}
								list={list}
								active={selectedLists.includes(list)}
								handleClick={() => toggleList(list)}
							/>
						))}
					</div>
				</>
			)}
			{stage === 'testing' && <div></div>}
		</div>
	);
}

export default Page;
