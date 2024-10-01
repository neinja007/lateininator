import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';
import clsx from 'clsx';

type BadgeProps = { color?: Color; text: string; big?: boolean };

const Badge = ({ color = 'default', text, big }: BadgeProps) => {
  return (
    <div className={clsx('inline-flex items-center justify-center rounded-full p-1 px-2', COLORS[color].static)}>
      <span className={clsx('font-medium uppercase leading-none', big ? 'text-sm' : 'text-xs')}>{text}</span>
    </div>
  );
};

export default Badge;
