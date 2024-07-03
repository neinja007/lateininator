import { mapper } from '@/data/mapper';
import { Type } from '@/data/types';

type TypeIndicatorProps = { type: Type };

const TypeIndicator = ({ type }: TypeIndicatorProps) => {
	let color: string;

	switch (type) {
		case 'verb':
			color = 'bg-red-300 text-red-800';
			break;

		case 'noun':
			color = 'bg-blue-300 text-blue-800';
			break;

		case 'adjective':
			color = 'bg-green-300 text-green-800';
			break;

		case 'irregular_verb':
			color = 'bg-gray-100 text-gray-600';
			break;

		default:
			color = 'bg-gray-300 text-gray-800';
			break;
	}

	return (
		<span className={`p-1 px-2 text-sm uppercase font-medium rounded-full ${color}`}>{mapper.extended.type[type]}</span>
	);
};

export default TypeIndicator;
