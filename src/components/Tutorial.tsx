type TutorialProps = {
  children: React.ReactNode;
  heading: string;
};

const Tutorial = ({ children, heading }: TutorialProps) => {
  return (
    <div className='mb-4 rounded-lg border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-700 dark:bg-cyan-900'>
      <h2 className='mb-2 text-center text-xl font-bold'>{heading}</h2>
      {children}
    </div>
  );
};

export default Tutorial;
