import { useEffect, useState } from 'react';

export const useValidTextArea = (value) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (value === '') {
      setError(true);
    } else {
      setError(false);
    }
  }, [value]);

  return error;
};
