"use client";

import { Button } from "@/components/ui/button";
import { usePaymentCommand } from "@/composable/command/usePaymentCommand";
import { useRouter } from "next/navigation";

interface PaymentProps {
  tradeType: string;
  amount: number;
  paymentType: string;
  userType: string;
  userId: string;
  paymentMethodId: string;
}

interface PurchaseButtonProps {
  decrypted: PaymentProps;
}

export default function PurchaseButton({ decrypted }: PurchaseButtonProps) {
  const router = useRouter();
  
  const { paymentMutation, isLoading, isError } = usePaymentCommand();
  const handlePurchase = async () => {
    const res =await paymentMutation(decrypted);
    console.log("payment response", res)
    // router.push("/payment-success");
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <Button
        variant={"outline"}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      >
        Cancel
      </Button>
      <Button
        onClick={handlePurchase}
        disabled={isLoading}
        className="cursor-pointer"
      >
        {isLoading ? "Processing..." : "Purchase"}
      </Button>
      {isError && <p className="text-red-500 text-sm mt-2">{isError}</p>}
    </div>
  );
}
