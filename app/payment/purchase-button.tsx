"use client";

import { usePaymentCommand } from "@/composable/command/usePaymentCommand";
import { PaymentProps } from "@/types/payment";
import { useEffect } from "react";

interface PurchaseButtonProps {
  decrypted: PaymentProps;
}

export default function PurchaseButton({ decrypted }: PurchaseButtonProps) {
  const { paymentMutation, isLoading, isError } = usePaymentCommand();

  useEffect(() => {
    const callPayment = async () => {
      const res = await paymentMutation(decrypted);
      window.location.href = res;
    };

    callPayment();
  }, []);

  if (isError) {
    return <p className="text-red-500 text-sm mt-2">{isError}</p>;
  }

  return (
    <p className="text-center text-lg font-medium mt-5">
      {isLoading ? "Processing payment..." : "Redirecting..."}
    </p>
  );
}
