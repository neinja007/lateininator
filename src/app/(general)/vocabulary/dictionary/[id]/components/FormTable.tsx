import { WORD_CONSTANTS } from '@/constants';
import { Word } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';

type FormTableProps = {
	word: Word;
	label?: string;
	cols?: readonly string[];
	rows?: readonly string[];
	colKey: string;
	rowKey: string;
	additionalFormInfo?: { [key: string]: any };
};

const FormTable = ({ word, label, cols, rows, colKey, rowKey, additionalFormInfo }: FormTableProps) => {
	const colMapper = MAPPER.extended[colKey as keyof typeof MAPPER.extended];
	const rowMapper = MAPPER.extended[rowKey as keyof typeof MAPPER.extended];
	cols = cols ? cols : WORD_CONSTANTS[colKey as keyof typeof WORD_CONSTANTS];
	rows = rows ? rows : WORD_CONSTANTS[rowKey as keyof typeof WORD_CONSTANTS];

	return (
		<div>
			{label && <p>{label}</p>}
			<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
				<thead className='bg-gray-100'>
					<tr>
						<th />
						{cols.map((element) => (
							<th key={element} className='px-3 py-1'>
								{colMapper[element as keyof typeof colMapper]}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((element) => (
						<tr key={element} className='border-t'>
							<th className='px-3 py-1 bg-gray-100'>{rowMapper[element as keyof typeof colMapper]}</th>
							{cols.map((element2) => (
								<td key={element2} className='px-3 py-1'>
									{getForm(word, { [rowKey]: element, [colKey]: element2, ...additionalFormInfo } as any)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FormTable;
