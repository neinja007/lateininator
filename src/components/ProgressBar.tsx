type ProgressBarProps = { progressPercentage: number };

const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
	return (
		<div className='w-full h-6 mx-3 my-auto flex'>
			<span className='mr-2'>{progressPercentage.toFixed(1)}%</span>
			<div className='flex-grow h-6 w-auto rounded-lg bg-gray-200 overflow-hidden'>
				<div className='h-full bg-blue-500 transition-all ease-linear' style={{ width: `${progressPercentage}%` }} />
			</div>
		</div>
	);
};

export default ProgressBar;
