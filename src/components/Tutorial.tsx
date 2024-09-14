type TutorialProps = {
  children: React.ReactNode;
  heading: string;
};

const Tutorial = ({ children, heading }: TutorialProps) => {
  return (
    <div className='mb-4 rounded-lg border border-teal-200 bg-teal-50 p-4 dark:border-teal-700 dark:bg-teal-900'>
      <h2 className='mb-2 text-center text-xl font-bold'>{heading}</h2>
      {children}
    </div>
  );
};

export default Tutorial;
