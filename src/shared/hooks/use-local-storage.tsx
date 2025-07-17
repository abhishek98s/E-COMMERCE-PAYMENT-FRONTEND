import { useEffect, useState } from 'react';

type useLocalStoregeProps = {
  key: string;
  initialValue: string;
};

const useLocalStorege = ({ key, initialValue }: useLocalStoregeProps) => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorege;
