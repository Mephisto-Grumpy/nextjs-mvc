import Form from '@/components/Form'

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-300 dark:border-neutral-800 shadow-xl bg-white dark:bg-zinc-800">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-200 dark:border-zinc-600 px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Sign In
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Sign in to your account with your email and password
          </p>
        </div>
        <Form type="login" />
      </div>
    </div>
  )
}
