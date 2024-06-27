import { INavLink } from '@/components/interface/INavLink'
import Link from 'next/link'

export function NavElements({
  navigationLinks
}: {
  navigationLinks: INavLink[]
}) {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navigationLinks.map((link: { key: string; value: string }) => (
        <Link
          className="text-sm font-medium transition-colors hover:text-primary"
          href={`/${link.value}`}
          key={link.key}
        >
          {link.key}
        </Link>
      ))}
    </nav>
  )
}
