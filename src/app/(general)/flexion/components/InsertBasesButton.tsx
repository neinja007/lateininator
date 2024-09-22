import { LucideBetweenVerticalStart } from 'lucide-react';

import Button from '@/components/Button';

type InsertBasesButtonProps = {
  setTableInputValues: () => void;
};

const InsertBasesButton = ({ setTableInputValues }: InsertBasesButtonProps) => {
  return (
    <Button color='green' className='flex items-center gap-x-1' onClick={setTableInputValues}>
      <LucideBetweenVerticalStart size={16} />
      Stämme einfügen
    </Button>
  );
};

export default InsertBasesButton;
