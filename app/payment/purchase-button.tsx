"use client";

import { usePaymentCommand } from "@/composable/command/usePaymentCommand";
import { PaymentProps } from "@/types/payment";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface PurchaseButtonProps {
  decrypted: PaymentProps;
}

export default function PurchaseButton({ decrypted }: PurchaseButtonProps) {
  const { paymentMutation, isLoading, isError, error } = usePaymentCommand();

  useEffect(() => {
    const callPayment = async () => {
      const res = await paymentMutation(decrypted);
      // window.location.href = res;
    };

    callPayment();
  }, []);

  if (isError) {
    const errorMessage = error instanceof Error ? error.message : "Payment failed after 3 attempts. Please try again later.";
    return (
      <div className="text-center mt-5 p-4 bg-red-50 border-2 border-red-500 rounded-lg">
        <div className="flex items-center justify-center gap-3 mb-2">
          <AlertCircle className="w-6 h-6 text-red-600" strokeWidth={2.5} />
          <p className="text-red-600 text-md font-bold">{errorMessage}</p>
        </div>
        <p className="text-gray-600 text-xs mt-3">If the problem persists, please contact support.</p>
      </div>
    );
  }

  return (
    <p className="text-center text-lg font-medium mt-5">
      {isLoading ? "Processing payment..." : "Redirecting..."}
    </p>
  );
}
