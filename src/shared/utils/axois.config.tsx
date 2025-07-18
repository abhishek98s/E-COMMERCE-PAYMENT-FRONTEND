import axios, { AxiosInstance } from 'axios';
import useToast from '../hooks/use-toast.hooks';
import { errorMessages } from './app';

export const axiosInterceptor = (): AxiosInstance => {
  const [showToast] = useToast();
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (404 === error?.response?.status) {
        showToast(errorMessages.NOT_FOUND, 'error');
      } else if (400 === error?.response?.status) {
        showToast(errorMessages.BAD_REQUEST, 'error');
      } else {
        showToast(errorMessages.INTERNAL_SERVER_ERROR, 'error');
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
