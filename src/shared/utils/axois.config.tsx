import axios, { AxiosInstance } from 'axios';

export const axiosInterceptor = (): AxiosInstance => {
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
        console.log('eerrrr')
      if (400 === error?.response?.status) {
        console.log('400 Error');
      }
      if (500 === error?.response?.status) {
        console.log('500 Error');
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
