
export default function page() {
    console.log("secret", process.env.SECRET_KEY)

  return (
    <div className='flex flex-1 w-full h-screen items-center justify-center text-primary mx-auto'>Payment Success Page</div>
  )
}
