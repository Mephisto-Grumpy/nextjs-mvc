import type { Metadata } from 'next'
import { M_PLUS_1 } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Suspense } from 'react'
import Header from '@/components/Header'

const mplus = M_PLUS_1({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js with Tailwind CSS (MVC Architecture)',
  description: 'Template for Next.js with Tailwind CSS (MVC Architecture)'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={mplus.className}>
        <Toaster />
        <Suspense fallback={'Loading...'}>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
