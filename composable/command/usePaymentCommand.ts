import { createPayment } from "@/http/apis/paymentApi";
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner";

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
            return response?.redirectUrl
            // console.log("data in query", response?.redirectUrl)
        },
        onSuccess: () => {
            // window.location.href = "/payment-success";
            toast.success("payment success")
        },
    })
    return {
        paymentMutation: paymentMutation.mutateAsync,
        isLoading: paymentMutation.isPending,
        isError: paymentMutation.isError
    }
}