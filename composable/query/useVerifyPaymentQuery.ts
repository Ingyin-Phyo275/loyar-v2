'use client'

import { useQuery } from "@tanstack/react-query"
import { verifyPaymentStatus } from "@/http/apis/paymentApi";

export const useVerifyPaymentQuery = (merchOrderId: string) => {
    const verifyPayment = useQuery({
        queryKey: ["verifyPayment", merchOrderId],
        queryFn: async () => {
            const response = await verifyPaymentStatus(merchOrderId);
            return response;
        },
        enabled: !!merchOrderId,
        retry: false,
    })

    return {
        verifyPayment: verifyPayment?.data,
        isLoading: verifyPayment.isLoading,
        isError: verifyPayment.isError,
        refetch: verifyPayment.refetch,
    }
}