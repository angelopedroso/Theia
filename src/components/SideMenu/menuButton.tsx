import Link from 'next/link'
import { ReactNode } from 'react'

export interface MenuButtonProps {
  children: ReactNode
  title: string
  isDash?: boolean
  open: boolean
  url?: string
}

export function MenuButton({
  children,
  open,
  title,
  isDash = false,
  url = '/',
}: MenuButtonProps) {
  return (
    <Link
      className={`flex min-w-fit ${
        !open && 'w-fit'
      } items-center gap-x-2 rounded-md p-2 ${
        isDash ? 'text-zinc-50' : 'text-gray-500'
      } hover:bg-slate-700`}
      href={url}
    >
      {children}
      <span
        className={`font-menu text-sm ${
          !open && 'hidden'
        } w-max origin-left font-medium duration-200`}
      >
        {title}
      </span>
    </Link>
  )
}
