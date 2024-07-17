type ProgressBarProps = { progressPercentage: number };

const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
  return (
    <div className='mx-3 my-auto flex h-6 w-full'>
      <span className='mr-2'>{progressPercentage.toFixed(1)}%</span>
      <div className='h-6 w-auto flex-grow overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-600'>
        <div className='h-full bg-blue-500 transition-all ease-linear' style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
