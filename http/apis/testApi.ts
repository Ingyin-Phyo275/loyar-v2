import { AxiosError } from "axios"
import axiosInstance from "../httpClient"

export const getPosts = async () => {
    try {
        const response = await axiosInstance.get('/posts')
        return response?.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error (error.message)
        }
        throw new Error('Something went wrong')
    }
}