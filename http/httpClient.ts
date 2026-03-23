import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://uat.api.loyar.com.mm';
const axiosInstance = axios.create({
  baseURL: baseURL, //  Set your API base URL
  timeout: 90000, // Optional: request timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance