import { BREAKPOINTS } from '@/constants/other';
import { useEffect } from 'react';

export const useWidth = (
  width: 'sm' | 'md' | 'lg' | 'xl',
  onReachWidth: () => void,
  onExit?: () => void,
  max?: boolean
): void => {
  useEffect(() => {
    const handleResize = () => {
      if (max ? window.innerWidth > BREAKPOINTS[width] : window.innerWidth < BREAKPOINTS[width]) {
        onReachWidth();
      } else {
        onExit && onExit();
      }
    };
    addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, [width, onReachWidth, max, onExit]);
};
