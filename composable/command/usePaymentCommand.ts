import { createPayment } from "@/http/apis/paymentApi";
import { useMutation } from "@tanstack/react-query"

interface PaymentProps {
  tradeType: string;
  amount: number;
  paymentType: string;
  userType: string;
  userId: string;
  paymentMethodId: string;
}

export const usePaymentCommand = () => {
    const paymentMutation = useMutation({
        mutationKey: ["payment"],
        mutationFn: async (paymentData: PaymentProps) => {
            const response = await createPayment(paymentData);
            console.log("data in query", response?.data)
        },
        onSuccess: () => {
            window.location.href = "/payment-success";
        },
    })
    return {
        paymentMutation: paymentMutation.mutateAsync,
        isLoading: paymentMutation.isPending,
        isError: paymentMutation.isError
    }
}