import { COLORS } from '@/constants';
import { Color } from '@/types';

type BadgeProps = { color?: Color; text: string };

const Badge = ({ color = 'default', text }: BadgeProps) => {
	return (
		<span className={`p-1 px-2 uppercase align-middle text-xs font-medium rounded-full border ${COLORS[color]}`}>
			{text}
		</span>
	);
};

export default Badge;
