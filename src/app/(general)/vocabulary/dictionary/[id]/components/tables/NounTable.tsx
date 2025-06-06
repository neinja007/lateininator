import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { Noun } from '@/types/word';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { useSettings } from '@/hooks/database/queries/useSettings';
import clsx from 'clsx';

type NounTableProps = { word: Noun };

const NounTable = ({ word }: NounTableProps) => {
  const {
    query: { status },
    settings
  } = useSettings();

  const showVocative = settings && settings.DICTIONARY_VOCATIVE === 'true';

  return (
    <div className={table.container}>
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
          {WORD_CONSTANTS.wordCase
            .filter((wordCase) => (status === 'success' && showVocative) || wordCase !== '6')
            .map((wordCase) => (
              <tr key={wordCase} className={table.tr}>
                <th className={table.th}>{MAPPER.extended.wordCase[wordCase]}</th>
                {WORD_CONSTANTS.numerus.map((numerus) => (
                  <td
                    key={numerus}
                    className={clsx(
                      table.td,
                      getForm(word, { wordCase: wordCase, numerus: numerus }).exception && 'text-yellow-500'
                    )}
                  >
                    {getForm(word, { wordCase: wordCase, numerus: numerus }).form}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default NounTable;
