// src/api/axios.js
import { decryptAuthData } from '@/lib/helper';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const axiosInstance = axios.create({
  baseURL: baseURL, //  Set your API base URL
  timeout: 90000, // Optional: request timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Optional: Add interceptors for request/response
axiosInstance.interceptors.request.use(
  (config) => {
    // e.g., Add token to headers
    const user = decryptAuthData(localStorage.getItem('user')!);
    const token = user?.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);



export default axiosInstance;
