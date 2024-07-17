import { COLORS } from '@/constants';
import { Color } from '@/types';

type BadgeProps = { color?: Color; text: string };

const Badge = ({ color = 'default', text }: BadgeProps) => {
  return (
    <span className={`rounded-full border p-1 px-2 align-middle text-xs font-medium uppercase ${COLORS[color]}`}>
      {text}
    </span>
  );
};

export default Badge;
