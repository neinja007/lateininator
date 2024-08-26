import { BREAKPOINTS } from '@/constants/other';
import { useCallback, useEffect } from 'react';

export const useWidth = (
  width: 'sm' | 'md' | 'lg' | 'xl',
  onReachWidth: () => void,
  onExit?: () => void,
  max?: boolean
): void => {
  const handleResize = useCallback(() => {
    if (max ? window.innerWidth > BREAKPOINTS[width] : window.innerWidth < BREAKPOINTS[width]) {
      onReachWidth();
    } else {
      onExit && onExit();
    }
  }, [max, onExit, onReachWidth, width]);

  useEffect(() => {
    addEventListener('resize', handleResize);

    handleResize();

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
};
