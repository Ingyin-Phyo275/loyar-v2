"use client";
import { decryptData } from "@/lib/crypto";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
//   const { data, iv } = searchParams;
    const params = useSearchParams();
    const data = params.get("data");
    const iv = params.get("iv");
  if (!data || !iv) {
    return <div>Error: missing data or iv</div>;
  }

  let decrypted: string;
  try {
    decrypted = decryptData(data, iv);
  } catch (e) {
    return <div>Error decrypting data: {e as string | undefined}</div>;
  }

  return <div>Decrypted data: {decrypted}</div>;
}