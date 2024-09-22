'use client';

import clsx from 'clsx';
import Info from './Info';
import { useSettings } from '@/hooks/database/queries/useSettings';
import { COLORS } from '@/constants/other';
import { AvailableColor } from '@/app/(general)/user/settings/components/ColorPicker';

type TutorialHeadingProps = {
  children?: React.ReactNode;
  className?: React.CSSProperties;
  heading: string;
} & React.ComponentProps<'h1'>;

const Heading = ({ children, className, heading, ...props }: TutorialHeadingProps) => {
  const { settings } = useSettings();
  const primaryColor = settings?.PRIMARY_COLOR || 'blue';

  return (
    <h1 {...props} className={clsx('mb-5 text-center text-3xl', className)}>
      <span className='inline-block'>
        <span className={clsx('font-bold', COLORS[primaryColor as AvailableColor].text)}>{heading}</span>
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
