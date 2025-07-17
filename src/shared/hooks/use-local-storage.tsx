'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type useLocalStorageProps<A> = {
  key: string;
};

const useLocalStorage = <A,>({
  key,
}: useLocalStorageProps<A>): [A[], Dispatch<SetStateAction<A[]>>] => {
  const [value, setValue] = useState<A[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        const parseStoredValue = JSON.parse(storedValue);
        setValue(parseStoredValue);
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
