'use client'

import { ReactNode, createContext, useState } from 'react'

interface FilterTableContextProps {
  search: string
  setSearch: (search: string) => void
}

interface FilterTableProviderProps {
  children: ReactNode
}

export const filterTableContext = createContext<FilterTableContextProps>(
  {} as FilterTableContextProps,
)

export function FilterTableProvider(props: FilterTableProviderProps) {
  const [search, setSearch] = useState('')

  return (
    <filterTableContext.Provider value={{ search, setSearch }}>
      {props.children}
    </filterTableContext.Provider>
  )
}
