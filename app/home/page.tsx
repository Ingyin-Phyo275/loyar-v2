import Image from 'next/image'

export default function page() {
  return (
    <div className="flex flex-1 flex-col w-full items-center justify-center my-auto min-h-screen gap-4">
      <Image
        src={"/images/loyar_logo.png"}
        alt="Loyar Logo"
        width={200}
        height={200}
      />
      <p className="text-lg font-medium">Redirecting to Mobile...</p>
    </div>
  )
}
