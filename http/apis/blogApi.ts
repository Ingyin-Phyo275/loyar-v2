import { AxiosError } from "axios"
import axiosInstance from "../httpClient"

export const getAllBlogs = async (category: string) => {
    try {
        const response = await axiosInstance.get(`/taxi/blogs`, {
            params: { category }
        });
        return response?.data?.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }
        throw error;
    }
}
