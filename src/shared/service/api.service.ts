import { toast } from 'react-toastify';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { APP_BASE_URL } from '../utils/app';
import { AuthContext } from '../context/auth.context';

export class ApiService {
  protected axiosInstance: AxiosInstance;
  private readonly url = APP_BASE_URL;

  constructor() {
    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        if (response) {
          const { status, data } = response;
          let message = '';
          switch (status) {
            case 404:
              message = data.message || 'Not Found';
              break;
            case 400:
              message = data.message || 'Bad Request';
              break;
            case 500:
              message = data.message || 'Internal Server Error';
              break;
            default:
              message = data.message || 'Request Failed';
          }
          toast.error(message);
          return Promise.reject({ ...error, message });
        }
        return Promise.reject(error);
      }
    );
    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get<T>(`${this.url}${url}`, options).then((res) => res.data);
  }

  post<T>(url: string, data?: any, options?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .post<T>(`${this.url}${url}`, data, options)
      .then((res) => res.data);
  }

  put<T>(url: string, data?: any, options?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .put<T>(`${this.url}${url}`, data, options)
      .then((res) => res.data);
  }

  delete<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .delete<T>(`${this.url}${url}`, options)
      .then((res) => res.data);
  }
}
