import { WORD_CONSTANTS } from '@/constants';
import { Word } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/formUtils';
import table from '@/styles/table.module.css';

type NounTableProps = { word: Word };

const NounTable = ({ word }: NounTableProps) => {
  return (
    <table className={table.table}>
      <thead className={table.thead}>
        <tr>
          <th />
          {WORD_CONSTANTS.numerus.map((numerus) => (
            <th key={numerus} className={table.th}>
              {MAPPER.extended.numerus[numerus]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {WORD_CONSTANTS.wordCase.map((wordCase) => (
          <tr key={wordCase} className={table.tr}>
            <th className={table.th}>{MAPPER.extended.wordCase[wordCase]}</th>
            {WORD_CONSTANTS.numerus.map((numerus) => (
              <td key={numerus} className={table.td}>
                {getForm(word, { wordCase: wordCase, numerus: numerus })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NounTable;
