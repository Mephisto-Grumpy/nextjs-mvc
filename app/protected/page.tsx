import SignOut from '@/components/SignOut'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <SignOut />
      </div>
    </div>
  )
}
