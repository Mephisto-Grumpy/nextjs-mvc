'use client'

import { useState } from 'react'
import LoadingDot from '@/components/LoadingDot'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Form({ type }: { type: 'login' | 'register' }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      setLoading(false)

      if (response.status === 200) {
        toast.success('Login successful! Redirecting...', { duration: 2000 })
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        const { error } = await response.json()
        toast.error(error, { duration: 4000 })
      }
    } catch (error) {
      setLoading(false)
      toast.error('An error occurred. Please try again.', { duration: 4000 })
    }
  }

  const handleRegister = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      setLoading(false)

      if (response.status === 200) {
        toast.success('Account created! Redirecting to login...', {
          duration: 2000
        })
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      } else {
        const { error } = await response.json()
        toast.error(error, { duration: 4000 })
      }
    } catch (error) {
      setLoading(false)
      toast.error('An error occurred. Please try again.', { duration: 4000 })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value

    if (type === 'login') {
      await handleLogin(email, password)
    } else {
      await handleRegister(email, password)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 bg-zinc-50 dark:bg-zinc-900 px-4 py-8 sm:px-16 rounded-md shadow-md"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-zinc-600 dark:text-zinc-300 uppercase bg-zinc-50 dark:bg-zinc-900"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="panic@thedis.co"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 placeholder-zinc-400 dark:placeholder-zinc-500 shadow-sm focus:border-black focus:outline-none focus:ring-black dark:focus:border-white dark:focus:ring-white dark:bg-zinc-700 sm:text-sm text-black dark:text-white"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-zinc-600 dark:text-zinc-300 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 placeholder-zinc-400 dark:placeholder-zinc-500 shadow-sm focus:border-black focus:outline-none focus:ring-black dark:focus:border-white dark:focus:ring-white dark:bg-zinc-700 sm:text-sm text-black dark:text-white"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? 'cursor-not-allowed border-zinc-200 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-700'
            : 'border-black bg-black text-white hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white'
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <div className="flex space-x-1">
            <LoadingDot color="#808080" />
          </div>
        ) : (
          <p>{type === 'login' ? 'Sign In' : 'Sign Up'}</p>
        )}
      </button>
      {type === 'login' ? (
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="font-semibold text-zinc-800 dark:text-zinc-200"
          >
            Sign up
          </Link>{' '}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-zinc-800 dark:text-zinc-200"
          >
            Sign in
          </Link>{' '}
          instead.
        </p>
      )}
    </form>
  )
}
