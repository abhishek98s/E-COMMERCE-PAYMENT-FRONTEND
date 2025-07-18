'use client';

import { useEffect, useState } from 'react';
import { axiosInterceptor } from '../utils/axois.config';
import { APP_BASE_URL } from '../utils/app';
import axios from 'axios';

export const useFetch = <T,>(url: string, options = {}) => {
  const [data, setData] = useState<T[] | null | T>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const axiosInstance = axiosInterceptor();

    try {
      const response = await axiosInstance.get(`${APP_BASE_URL}/${url}`, {
        ...options,
      });

      setData(response.data);
    } catch (error) {
      const err = (error as Error).message;

      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message);
      } else {
        setError(err);
      }
      console.log('useFetch error');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetchData: fetchData };
};
