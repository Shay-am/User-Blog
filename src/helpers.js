import { useEffect, useState } from 'react';

export const useValidTextArea = (inputValue) => {
  const [hasError, setError] = useState(false);
  useEffect(() => {
    if (inputValue === '') {
      setError(true);
    } else {
      setError(false);
    }
  }, [inputValue]);

  return hasError;
};
