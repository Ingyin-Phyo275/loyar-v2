"use client";

import { decryptData } from "@/lib/crypto";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import PurchaseButton from "./purchase-button";
import { PaymentProps } from "@/types/payment";

type PaymentState = PaymentProps | { error: string } | null;

export default function PaymentPage() {
  const params = useSearchParams();
  const data = params.get("data");
  const iv = params.get("iv");

  // useMemo to only decrypt when data or iv changes
  const decrypted: PaymentState = useMemo(() => {
    if (!data || !iv) return { error: "Missing data or IV" };

    try {
      const decryptedString = decryptData(
        decodeURIComponent(data),
        decodeURIComponent(iv)
      );
      return JSON.parse(decryptedString) as PaymentProps;
    } catch (err) {
      console.error("Decryption failed:", err);
      return { error: "Invalid or tampered data" };
    }
  }, [data, iv]);

  if (decrypted && "error" in decrypted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 px-4">
        <p className="text-red-600 text-lg font-medium mt-4">{decrypted.error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">

        <div className="flex flex-col items-center">
          <Image
            loading='eager'
            src="/images/loyar_logo.png"
            alt="Loyar Logo"
            width={120}
            height={120}
          />
          <PurchaseButton decrypted={decrypted} />
        </div>
      </div>
    </div>
  );
}