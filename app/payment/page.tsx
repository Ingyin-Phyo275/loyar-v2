import Image from "next/image";
import { decryptData } from "@/lib/crypto";
import PurchaseButton from "./purchase-button";

interface PageProps {
  searchParams: {
    data?: string;
    iv?: string;
  };
}

interface PaymentProps {
  tradeType: string;
  amount: number;
  paymentType: string;
  userType: string;
  userId: string;
  paymentMethodId: string;
}

type PaymentState = PaymentProps | { error: string } | null;

export default function PaymentPage({ searchParams }: PageProps) {
  let decrypted: PaymentState = null;

  try {
    const { data, iv } = searchParams;
    if (data && iv) {
      const decryptedString = decryptData(data, iv);
      decrypted = JSON.parse(decryptedString) as PaymentProps;
    }
  } catch (err) {
    console.error("Decryption failed:", err);
    decrypted = { error: "Invalid or tampered data" };
  }

  if (decrypted && "error" in decrypted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 px-4">
        <p className="text-red-600 text-lg font-medium mt-4">
          {decrypted.error}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/images/loyar_logo.png"
            alt="Loyar Logo"
            width={120}
            height={120}
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Payment Details
          </h2>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Trade Type:</span>
            <span className="text-gray-800">{decrypted?.tradeType || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Amount:</span>
            <span className="text-gray-800">${decrypted?.amount || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Payment Type:</span>
            <span className="text-gray-800">{decrypted?.paymentType || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">User Type:</span>
            <span className="text-gray-800">{decrypted?.userType || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">User ID:</span>
            <span className="text-gray-800">{decrypted?.userId || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Payment Method:</span>
            <span className="text-gray-800">{decrypted?.paymentMethodId || "N/A"}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <PurchaseButton decrypted={decrypted as PaymentProps} />
        </div>
      </div>
    </div>
  );
}