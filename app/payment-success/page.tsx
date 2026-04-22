'use client'

import { CircleCheckBig, CircleX, Loader2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyPaymentQuery } from "@/composable/query/useVerifyPaymentQuery";
import { useEffect, useState } from "react";

export default function page() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const merchOrderId = searchParams.get("merch_order_id") ?? ""

  const { verifyPayment, isError, isLoading, refetch } = useVerifyPaymentQuery(merchOrderId)
  const [countdown, setCountdown] = useState(0)

  const redirectToHome = () => {
    const isUser = verifyPayment?.data?.payment?.paymentType?.toLowerCase() === 'booking';

    if (isUser) {
      router.push(`/user/payment-success?merchOrderId=${merchOrderId}`);
    } else {
      router.push(`/driver/payment-success?merchOrderId=${merchOrderId}`);
    }
  }

  const isSuccess = verifyPayment?.data?.payment?.paymentType?.toLowerCase() === 'booking'
    ? (verifyPayment?.data?.payment?.status?.toLowerCase() === 'success' && verifyPayment?.data?.transaction?.paymentStatus?.toLowerCase() === 'success')
    : (verifyPayment?.data?.payment?.status?.toLowerCase() === 'success' && verifyPayment?.data?.transaction?.status?.toLowerCase() === 'success')

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (isSuccess && countdown === 0) {
      redirectToHome();
    }
    return () => clearTimeout(timer);
  }, [isSuccess, countdown]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
            <Loader2 className="w-10 h-10 text-gray-400 animate-spin" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-gray-800">Verifying Payment</h1>
            <p className="text-sm text-gray-500">Please wait while we confirm your transaction...</p>
          </div>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top accent */}
          <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500" />

          <div className="p-8 space-y-6">
            {/* Icon + title */}
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 ring-8 ring-green-50">
                <CircleCheckBig className="w-10 h-10 text-green-600" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">Payment Successful</h1>
                <p className="text-sm text-gray-500">
                  Your transaction has been confirmed. Thank you for your purchase!
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-200" />

            {/* Transaction details */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Payment Status</span>
                <span className="font-medium text-green-600 uppercase">
                  {verifyPayment?.data?.payment?.status}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Transaction Status</span>
                <span className="font-medium text-green-600 uppercase">
                  {verifyPayment?.data?.transaction?.status}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-200" />

            {/* CTA */}
            <div className="space-y-3">
              <Button onClick={redirectToHome} className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer h-11 rounded-xl font-semibold">
                Back to App ({countdown}s)
              </Button>
              <p className="text-center text-xs text-gray-400">
                You will be redirected automatically in {countdown} seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error or non-success status
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-rose-50 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Top accent */}
        <div className="h-2 bg-gradient-to-r from-red-400 to-rose-500" />

        <div className="p-8 space-y-6">
          {/* Icon + title */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 ring-8 ring-red-50">
              <CircleX className="w-10 h-10 text-red-500" />
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">Payment Failed</h1>
              <p className="text-sm text-gray-500">
                We could not verify your payment. Please try again or contact support.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-200" />

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <Button onClick={() => refetch()} className="w-full bg-red-500 hover:bg-red-600 text-white cursor-pointer h-11 rounded-xl font-semibold">
              Try Again
            </Button>
            <Button onClick={redirectToHome} variant="outline" className="w-full cursor-pointer h-11 rounded-xl font-semibold">
              Back to App
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
