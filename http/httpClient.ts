import { getAccessToken } from "@/lib/auth";
import axios from "axios";
import { signOut } from "next-auth/react";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.drive.amuze.com.mm/api";

// baseUrl is defined above

const HTTP = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

HTTP.interceptors.request.use(
  async (config) => {
    const tokenData = await getAccessToken();
    if (tokenData) {
      config.headers["Authorization"] = `Bearer ${tokenData}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

HTTP.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      signOut({ callbackUrl: "/login" });
    }

    return Promise.reject(error);
  }
);

export default HTTP;
