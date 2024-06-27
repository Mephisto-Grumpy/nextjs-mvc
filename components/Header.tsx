import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import { ThemeToggle } from './ThemeToggle'
import { INavLink } from './interface/INavLink'
import { Button } from './ui/Button'
import { NavElements } from './ui/nav/NavElements'
import ProfileSwitcher from './ui/nav/ProfileSwitcher'
import { UserNav } from './ui/nav/UserNav'

export default function Header() {
  const navigation = [
    { key: 'Home', value: '' },
    { key: 'About', value: 'features' },
    { key: 'Pricing', value: 'pricing' }
  ] as INavLink[]

  const getUserIdFromCookies = () => {
    const cookieStore = cookies()
    return cookieStore.get('userId') || null
  }

  const session = getUserIdFromCookies()

  return (
    <header className="fixed min-w-full border-b border-zinc-200/30 dark:border-zinc-700/30 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link className="flex items-center space-x-2" href="/">
          <Image
            alt="Next.js"
            className="dark:invert"
            height={128}
            src="/next.svg"
            width={128}
          />
        </Link>
        <nav className="mx-6 flex-grow">
          <NavElements navigationLinks={navigation} />
        </nav>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <ProfileSwitcher session={session} />
              <ThemeToggle />
              <UserNav />
            </>
          ) : (
            <Link href="/register">
              <Button variant="default">Register</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
