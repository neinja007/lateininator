import { mapper } from '@/data/mapper';

type TypeIndicatorProps = { type: string };

function TypeIndicator({ type }: TypeIndicatorProps) {
	return (
		<span
			className={`p-1 text-sm uppercase font-medium ${
				type === 'verb'
					? 'bg-red-300 text-red-800'
					: type === 'noun'
					  ? 'bg-blue-300 text-blue-800'
					  : type === 'adjective'
					    ? 'bg-green-300 text-green-800'
					    : 'bg-gray-300 text-gray-800'
			}`}
		>
			{mapper.type[type]}
		</span>
	);
}

export default TypeIndicator;
