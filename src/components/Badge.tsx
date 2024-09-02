import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';
import clsx from 'clsx';

type BadgeProps = { color?: Color; text: string };

const Badge = ({ color = 'default', text }: BadgeProps) => {
  return (
    <span
      className={clsx(
        'rounded-full border p-1 px-2 align-middle text-xs font-medium uppercase dark:border-gray-700',
        COLORS[color]
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
