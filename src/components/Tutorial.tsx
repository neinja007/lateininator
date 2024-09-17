type TutorialProps = {
  children: React.ReactNode;
  heading?: string;
};

const Tutorial = ({ children, heading }: TutorialProps) => {
  return (
    <div className='mb-5 rounded-lg border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-700 dark:bg-cyan-900'>
      {heading && <h2 className='mb-2 text-center text-xl font-bold'>{heading}</h2>}
      <div className='space-y-4'>{children}</div>
    </div>
  );
};

export default Tutorial;
