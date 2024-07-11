type BadgeProps = { color?: 'red' | 'blue' | 'green' | 'gray'; text: string };

const Badge = ({ color, text }: BadgeProps) => {
	let colorClass: string;

	switch (color) {
		case 'red':
			colorClass = 'bg-red-300 text-red-800 border-red-400';
			break;

		case 'blue':
			colorClass = 'bg-blue-300 text-blue-800 border-blue-400';
			break;

		case 'green':
			colorClass = 'bg-green-300 text-green-800 border-green-400';
			break;

		case 'gray':
			colorClass = 'bg-gray-300 text-gray-800 border-gray-400';
			break;

		default:
			colorClass = 'bg-gray-100 text-gray-600 border-gray-200';
			break;
	}

	return (
		<span className={`p-1 px-2 uppercase align-middle text-xs font-medium rounded-full border ${colorClass}`}>
			{text}
		</span>
	);
};

export default Badge;
