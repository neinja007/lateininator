import { exceptionStructure } from '@/constants/other';
import table from '@/styles/table.module.css';
import { MainWordType, WordProperty } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import { Settings2 } from 'lucide-react';

type ExceptionHeaderProps = {
  type: MainWordType;
};

const ExceptionHeader = ({ type }: ExceptionHeaderProps) => {
  return (
    <thead className={table.thead}>
      <tr>
        {exceptionStructure[type].map((property) => (
          <th key={property} className={table.th}>
            {MAPPER.extended.property.singular[property as WordProperty]}
          </th>
        ))}
        <th className={table.th}>Ausnahme</th>
        <th className={clsx(table.th, 'w-12')}>
          <Settings2 />
        </th>
      </tr>
    </thead>
  );
};

export default ExceptionHeader;
