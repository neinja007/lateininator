'use client';

import clsx from 'clsx';
import Info from './Info';

type TutorialHeadingProps = {
  children?: React.ReactNode;
  className?: React.CSSProperties;
  heading: string;
} & React.ComponentProps<'h1'>;

const Heading = ({ children, className, heading, ...props }: TutorialHeadingProps) => {
  return (
    <h1 {...props} className={clsx('mb-5 text-center text-3xl', className)}>
      <span className='inline-block'>
        <span className='font-bold text-blue-500'>{heading}</span>
        {children && (
          <Info size={5} heading={heading}>
            {children}
          </Info>
        )}
      </span>
    </h1>
  );
};

export default Heading;
