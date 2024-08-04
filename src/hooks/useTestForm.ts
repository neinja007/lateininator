import { useEffect } from 'react';

export const useTestForm = (
  handleContinue: () => void
): {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
} => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleContinue();
  };

  useEffect(() => {
    const onEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleContinue();
      }
    };

    window.addEventListener('keydown', onEnter);

    return () => {
      window.removeEventListener('keydown', onEnter);
    };
  }, [handleContinue]);

  return { submit };
};
