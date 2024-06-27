import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed w-full backdrop-blur-md p-2 z-20 bg-gradient-to-b from-zinc-200 dark:from-zinc-800/30">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center gap-3 text-base">
          <Link href="/" className="group">
            <h2 className="font-semibold tracking-tighter p-2 text-lg">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                className="dark:invert"
                width={128}
                height={128}
                priority
              />
            </h2>
          </Link>
          <div className="items-center flex gap-3"></div>
          <div className="flex-1"></div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
