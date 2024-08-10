import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/formUtils';
import table from '@/styles/table.module.css';
import { Word } from '@/types';

type VerbTableProps = { word: Word };

const VerbTable = ({ word }: VerbTableProps) => {
  return (
    <div>
      {WORD_CONSTANTS.modus.map((modus) =>
        WORD_CONSTANTS.voice.map((voice) => (
          <>
            <p>
              {MAPPER.extended.modus[modus]} {MAPPER.extended.voice[voice]}
            </p>
            <table className={table.table}>
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
            <br />
          </>
        ))
      )}
    </div>
  );
};

export default VerbTable;
