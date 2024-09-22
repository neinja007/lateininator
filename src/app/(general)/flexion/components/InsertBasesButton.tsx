import { LucideBetweenVerticalStart } from 'lucide-react';

import Button from '@/components/Button';

type InsertBasesButtonProps = {
  onClick: () => void;
};

const InsertBasesButton = ({ onClick }: InsertBasesButtonProps) => {
  return (
    <Button color='green' className='flex items-center gap-x-1' onClick={onClick}>
      <LucideBetweenVerticalStart size={16} />
      Stämme einfügen
    </Button>
  );
};

export default InsertBasesButton;
