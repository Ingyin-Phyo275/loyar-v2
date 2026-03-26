import { CircleCheckBig } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function page() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-white to-green-100 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
              <CircleCheckBig className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold">Payment Successful 🎉</h1>
          <p className="text-sm text-gray-500">
            Your payment has been processed successfully. Thank you for your purchase!
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="w-full cursor-pointer"

          >
            Back to App
          </Button>
        </div>
      </div>
    </div>
  );
}