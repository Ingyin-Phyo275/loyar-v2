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
        const response = await axiosInstance.post('/payment/create', data);
        console.log("Full response:", response); 
        console.log("purchase response", response?.data);
        return response?.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new  Error(error.message || "API Error")
        }
        throw new Error("Something went wrong")
    }
}

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // e.g. "http://localhost:8000"
// export const createPayment = async (data: PaymentProps) => {
//   try {
//     const res = await fetch(`${BASE_URL}/payment/create`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) {
//       // handle non-200 responses
//       const text = await res.text(); // get raw response
//       throw new Error(`API Error: ${res.status} ${text}`);
//     }

//     const json = await res.json();
//     return json; // your JSON data
//   } catch (error) {
//     // make sure we return a proper error message
//     const message = error instanceof Error ? error.message : "Unknown error";
//     throw new Error(message);
//   }
// };