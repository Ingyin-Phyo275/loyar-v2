"use server";

import axiosInstance from "../../http/httpClient";

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/auth/user");
    // console.log("user data in api call", response?.data)
    return response.data;
  } catch (error: any) {
    // Get server message or fallback
    throw new Error(error.response?.data?.message || error.message || "Something went wrong");
  }
};