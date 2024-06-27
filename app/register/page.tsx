import Form from '@/components/Form'

export default function Register() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Sign Up
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  )
}
