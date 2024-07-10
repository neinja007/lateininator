import { WORD_CONSTANTS } from '@/constants';
import { Word, WordProperty } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';

type FormTableProps = {
	word: Word;
	label?: string;
	cols: keyof typeof WORD_CONSTANTS;
	rows: keyof typeof WORD_CONSTANTS;
	additionalFormInfo?: { [key: string]: string };
};

const FormTable = ({ word, label, cols, rows, additionalFormInfo }: FormTableProps) => {
	return (
		<div>
			{label && <p>{label}</p>}
			<table className='w-full rounded-lg table-fixed overflow-hidden shadow'>
				<thead className='bg-gray-100'>
					<tr>
						<th />
						{WORD_CONSTANTS[cols].map((element) => (
							<th key={element} className='px-3 py-1'>
								{MAPPER.extended[cols][element as keyof (typeof MAPPER.extended)[typeof cols]]}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{WORD_CONSTANTS[rows].map((element) => (
						<tr key={element} className='border-t'>
							<th className='px-3 py-1 bg-gray-100'>
								{MAPPER.extended[rows][element as keyof (typeof MAPPER.extended)[typeof rows]]}
							</th>
							{WORD_CONSTANTS[cols].map((element2) => (
								<td key={element2} className='px-3 py-1'>
									{getForm(word, { [rows]: element, [cols]: element2, ...additionalFormInfo } as any)}
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
