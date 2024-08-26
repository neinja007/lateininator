import { useEffect, useState } from 'react';

export const useIsDarkTheme = (): boolean | undefined => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkTheme(darkThemeQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    darkThemeQuery.addEventListener('change', handleChange);

    return () => {
      darkThemeQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isDarkTheme;
};
