
import axios from "axios";
import { getToken } from "./authConfig";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DJANGO_BASE_URL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = getToken();
      if (token) {
        if (!config.headers) {
          config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;