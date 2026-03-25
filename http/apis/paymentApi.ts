import { AxiosError } from "axios"
import axiosInstance from "../httpClient"

interface PaymentProps {
    tradeType: string,
    amount: number,
    paymentType: string,
    userType: string,
    userId: string,
    paymentMethodId: string
}
export const createPayment = async (data: PaymentProps) => {
    try {
        console.log("data before api ", data)
        const response = await axiosInstance.post('/purchase/create-payment', data);
        console.log("purchase response", response?.data);
        return response?.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new  Error(error.message || "API Error")
        }
        throw new Error("Something went wrong")
    }
}