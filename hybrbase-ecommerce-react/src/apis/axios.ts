import axios, { AxiosError } from 'axios';
import { baseURL, headers } from './axios.constants';

const axiosClient = axios.create({ baseURL, headers });

axiosClient.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => Promise.reject(error),
);

export { axiosClient };
