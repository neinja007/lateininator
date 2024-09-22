import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';
import clsx from 'clsx';

type BadgeProps = { color?: Color; text: string };

const Badge = ({ color = 'default', text }: BadgeProps) => {
  return (
    <div className={clsx('inline-flex items-center justify-center rounded-full p-1 px-2', COLORS[color].static)}>
      <span className='text-xs font-medium uppercase leading-none'>{text}</span>
    </div>
  );
};

export default Badge;
