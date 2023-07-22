import React from 'react'

export interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full">
      <h2 className="text-sm font-bold leading-normal text-zinc-50 xxs:text-lg sm:text-2xl">
        {props.title}
      </h2>
      <span className="text-xxs font-medium leading-normal text-indigo-600 xxs:text-xs sm:text-sm">
        {props.subtitle}
      </span>
    </header>
  )
}
