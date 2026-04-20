'use client'

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function DriverPaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const merchOrderId = searchParams.get("merchOrderId") ?? ""

  useEffect(() => {
    if (merchOrderId) {
      // Driver App redirect
      router.push(`/home?merchOrderId=${merchOrderId}`)
    }
  }, [merchOrderId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
        <p className="text-sm text-gray-500 font-medium">Redirecting to Driver App...</p>
      </div>
    </div>
  );
}
