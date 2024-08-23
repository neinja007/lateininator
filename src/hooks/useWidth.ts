import { BREAKPOINTS } from '@/constants/other';
import { useEffect } from 'react';

export const useWidth = (width: 'sm' | 'md' | 'lg' | 'xl', onReachWidth: () => void, max?: boolean): {} => {
  useEffect(() => {
    const handleResize = () => {
      if (max ? window.innerWidth > BREAKPOINTS[width] : window.innerWidth < BREAKPOINTS[width]) {
        onReachWidth();
      }
    };
    addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, [width, onReachWidth, max]);
  return {};
};
