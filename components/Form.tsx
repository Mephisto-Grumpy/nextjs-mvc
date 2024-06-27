'use client'

import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from './ui/Button'

export default function Form({ type }: { type: 'login' | 'register' }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
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
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
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
      className="flex flex-col space-y-4 bg-zinc-50 dark:bg-zinc-900 px-4 py-8 sm:px-16 shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
      <div>
        <Label
          className="block text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase"
          htmlFor="email"
        >
          Email Address
        </Label>
        <Input
          autoComplete="email"
          className="mt-1"
          id="email"
          name="email"
          placeholder="panic@thedis.co"
          required
          type="email"
        />
      </div>
      <div>
        <Label
          className="block text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase"
          htmlFor="password"
        >
          Password
        </Label>
        <Input
          className="mt-1"
          id="password"
          name="password"
          placeholder="••••••••"
          required
          type="password"
        />
      </div>
      <Button className="w-full" disabled={loading} type="submit">
        {type === 'login' ? 'Sign In' : 'Sign Up'}
      </Button>
      {type === 'login' ? (
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
          Don&apos;t have an account?{' '}
          <Link
            className="font-semibold text-zinc-800 dark:text-zinc-200"
            href="/register"
          >
            Sign up
          </Link>{' '}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
          Already have an account?{' '}
          <Link
            className="font-semibold text-zinc-800 dark:text-zinc-200"
            href="/login"
          >
            Sign in
          </Link>{' '}
          instead.
        </p>
      )}
    </form>
  )
}
