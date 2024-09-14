type TutorialProps = {
  children: React.ReactNode;
};

const Tutorial = ({ children }: TutorialProps) => {
  return (
    <div className='mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900'>
      {children}
    </div>
  );
};

export default Tutorial;
