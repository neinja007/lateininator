import { BREAKPOINTS } from '@/constants/other';
import { Breakpoint } from '@/types/other';
import { useCallback, useEffect } from 'react';

export const useWidth = (
  width: Breakpoint | undefined,
  onReachWidth: () => void,
  onExit?: () => void,
  max?: boolean
): void => {
  const handleResize = useCallback(() => {
    if (width && (max ? window.innerWidth > BREAKPOINTS[width] : window.innerWidth < BREAKPOINTS[width])) {
      onReachWidth();
    } else {
      width && onExit && onExit();
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
