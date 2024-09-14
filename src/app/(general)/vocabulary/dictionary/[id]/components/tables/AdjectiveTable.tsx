import { MAPPER } from '@/utils/other/mapper';
import { Fragment } from 'react';
import table from '@/styles/table.module.css';
import { Adjective } from '@/types/word';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import clsx from 'clsx';
import { useSettings } from '@/hooks/database/queries/useSettings';

type AdjectiveTableProps = { word: Adjective };

const AdjectiveTable = ({ word }: AdjectiveTableProps) => {
  const {
    query: { status },
    settings
  } = useSettings();

  const showVocative = settings && settings.DICTIONARY_VOCATIVE === 'true';

  return (
    <div>
      <p>{MAPPER.extended.type.singular.ADVERB}</p>
      <div className={table.container}>
        <table className={clsx(table.table, 'min-w-[450px]')}>
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
                    gender: 'M',
                    numerus: 'sin',
                    wordCase: '1'
                  })}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      {WORD_CONSTANTS.comparisonDegree.map((comparisonDegree) => (
        <Fragment key={comparisonDegree}>
          <p>{MAPPER.extended.comparisonDegree[comparisonDegree]}</p>
          <div className={table.container}>
            <table className={clsx(table.table, 'min-w-[600px]')}>
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
                  WORD_CONSTANTS.wordCase
                    .filter((wordCase) => (status === 'success' && showVocative) || wordCase !== '6')
                    .map((wordCase, i) => (
                      <tr key={i} className={table.tr}>
                        <th className={table.th}>
                          {MAPPER.short.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
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
          </div>
          <br />
        </Fragment>
      ))}
    </div>
  );
};

export default AdjectiveTable;
