import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function page() {
  return (
    <div className="flex flex-1 flex-col w-full items-center justify-center my-auto min-h-screen">
        <Image
            loading='eager'
            src={"/images/loyar_logo.png"}
            alt="Loyar Logo"
            width={200}
            height={200}
        />
        <Button className="mt-4 cursor-pointer">Back to Home</Button>
    </div>
  )
}
