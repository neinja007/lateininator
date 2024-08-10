import { WORD_CONSTANTS } from '@/constants';
import { Word } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/formUtils';
import { Fragment } from 'react';
import table from '@/styles/table.module.css';

type AdjectiveTableProps = { word: Word };

const AdjectiveTable = ({ word }: AdjectiveTableProps) => {
  return (
    <div>
      <p>{MAPPER.extended.type['adverb']}</p>
      <table className={table.table}>
        <thead className={table.thead}>
          <tr>
            {WORD_CONSTANTS.comparisonDegree.map((comparisonDegree) => (
              <th key={comparisonDegree} className={table.th}>
                {MAPPER.extended.comparisonDegree[comparisonDegree]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className={table.tr}>
            {WORD_CONSTANTS.comparisonDegree.map((comparisonDegree) => (
              <td key={comparisonDegree} className={table.td}>
                {getForm(word, {
                  comparisonDegree,
                  adverb: true,
                  gender: 'm',
                  numerus: 'sin',
                  wordCase: '1'
                })}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <br />
      {WORD_CONSTANTS.comparisonDegree.map((comparisonDegree) => (
        <Fragment key={comparisonDegree}>
          <p>{MAPPER.extended.comparisonDegree[comparisonDegree]}</p>
          <table className={table.table}>
            <thead className={table.thead}>
              <tr>
                <th />
                {WORD_CONSTANTS.gender.map((gender, i) => (
                  <th key={i} className={table.th}>
                    {MAPPER.extended.gender[gender]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WORD_CONSTANTS.numerus.map((numerus) =>
                WORD_CONSTANTS.wordCase.map((wordCase, i) => (
                  <tr key={i} className={table.tr}>
                    <th className={table.th}>
                      {MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {WORD_CONSTANTS.gender.map((gender, i) => (
                      <td key={i} className={table.td}>
                        {getForm(word, { comparisonDegree, gender, numerus, wordCase })}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <br />
        </Fragment>
      ))}
    </div>
  );
};

export default AdjectiveTable;
