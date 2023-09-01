import { cn } from '@/lib/utils'
import React from 'react'

export interface HeaderProps {
  title: string
  subtitle?: string
  className?: React.HtmlHTMLAttributes<HTMLHeadingElement>['className']
}

export function Header({
  title = '',
  subtitle = '',
  className = '',
}: HeaderProps) {
  return (
    <header className={cn('mb-14 w-full', className)}>
      <h2 className="font-header text-xl font-bold leading-normal text-zinc-50 2xs:text-2xl">
        {title}
      </h2>
      <span
        className={cn(
          'text-xs font-medium leading-normal text-indigo-600 sm:text-sm',
          className,
        )}
      >
        {subtitle}
      </span>
    </header>
  )
}
