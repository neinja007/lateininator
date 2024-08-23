import { useEffect } from 'react';

export const useMaxWidth = (maxWidth: number, onBelowMaxWidth: () => void): {} => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > maxWidth) {
        onBelowMaxWidth();
      }
    };
    addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, [maxWidth, onBelowMaxWidth]);
  return {};
};
