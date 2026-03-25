import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://uat.api.loyar.com.mm";
const axiosInstance = axios.create({
  baseURL: baseURL, //  Set your API base URL
  timeout: 90000, // Optional: request timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance