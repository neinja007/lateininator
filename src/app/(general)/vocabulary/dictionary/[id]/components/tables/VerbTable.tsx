import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { Verb } from '@/types/word';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import clsx from 'clsx';

type VerbTableProps = { word: Verb };

const VerbTable = ({ word }: VerbTableProps) => {
  return (
    <div>
      {WORD_CONSTANTS.modus.map((modus) =>
        WORD_CONSTANTS.voice.map((voice) => (
          <>
            <p>
              {MAPPER.extended.modus[modus]} {MAPPER.extended.voice[voice]}
            </p>
            <div className={table.container}>
              <table className={clsx(table.table, 'min-w-[800px]')}>
                <thead className={table.thead}>
                  <tr>
                    <th />
                    {WORD_CONSTANTS.tense.map(
                      (tense, i) =>
                        (modus === 'ind' || tense !== 'fut1') && (
                          <th key={i} className={table.th}>
                            {MAPPER.extended.tense[tense]}
                          </th>
                        )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {WORD_CONSTANTS.numerus.map((numerus) =>
                    WORD_CONSTANTS.person.map(
                      (person) =>
                        (person !== '4' || (modus === 'ind' && voice === 'act')) && (
                          <tr key={person} className={table.tr}>
                            <th className={table.th}>
                              {MAPPER.short.person[person]} {MAPPER.extended.numerus[numerus]}
                            </th>
                            {WORD_CONSTANTS.tense.map(
                              (tense) =>
                                (modus === 'ind' || tense !== 'fut1') &&
                                (person !== '4' || tense === 'pres') && (
                                  <td key={tense} className={table.td}>
                                    {getForm(word, { modus, numerus, person, tense, voice })}
                                  </td>
                                )
                            )}
                          </tr>
                        )
                    )
                  )}
                </tbody>
              </table>
            </div>
            <br />
          </>
        ))
      )}
    </div>
  );
};

export default VerbTable;
