"use client";

import { decryptData } from "@/lib/crypto";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import PurchaseButton from "./purchase-button";

interface PaymentProps {
  tradeType: string;
  amount: number;
  paymentType: string;
  userType: string;
  userId: string;
  paymentMethodId: string;
}

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
        {/* <p>Encrypted Data (first 20 chars): {data?.slice(0, 20)}</p>
        <p>IV: {iv}</p>
        <p>Payment Object: {JSON.stringify(decrypted)}</p> */}

        <div className="flex flex-col items-center">
          <Image
            src="/images/loyar_logo.png"
            alt="Loyar Logo"
            width={120}
            height={120}
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Payment Details</h2>
        </div>

        {/* Example: show individual fields */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Trade Type:</span>
            <span className="text-gray-800">{decrypted.tradeType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Amount:</span>
            <span className="text-gray-800">${decrypted.amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Payment Type:</span>
            <span className="text-gray-800">{decrypted.paymentType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">User Type:</span>
            <span className="text-gray-800">{decrypted.userType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">User ID:</span>
            <span className="text-gray-800">{decrypted.userId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Payment Method:</span>
            <span className="text-gray-800">{decrypted.paymentMethodId}</span>
          </div>
          <PurchaseButton decrypted={decrypted} />
        </div>
      </div>
    </div>
  );
}