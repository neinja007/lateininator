import { LucideBetweenVerticalStart } from 'lucide-react';

import Button from '@/components/Button';

type InsertBasesButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const InsertBasesButton = ({ onClick, disabled }: InsertBasesButtonProps) => {
  return (
    <Button className='flex items-center gap-x-2' disabled={disabled} color='primary' onClick={onClick}>
      <LucideBetweenVerticalStart size={16} />
      Stämme einfügen
    </Button>
  );
};

export default InsertBasesButton;
