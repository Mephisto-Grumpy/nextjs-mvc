import type { Metadata } from 'next'

import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { M_PLUS_1 } from 'next/font/google'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import './globals.css'

const mplus = M_PLUS_1({ subsets: ['latin'], variable: '--font-mplus' })

export const metadata: Metadata = {
  description: 'Template for Next.js with Tailwind CSS (MVC Architecture)',
  title: 'Next.js with Tailwind CSS (MVC Architecture)'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-mplus antialiased"',
          mplus.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Toaster />
          <Suspense fallback={'Loading...'}>
            <Header />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
