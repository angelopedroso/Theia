'use client'

import { ReactNode, createContext, useState } from 'react'

interface ModalContextProps {
  toggle: boolean
  name: string
  toggleModal: (name: string) => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const modalContext = createContext<ModalContextProps>(
  {} as ModalContextProps,
)

export function ModalProvider({ children }: ModalProviderProps) {
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState('')

  function toggleModal(name: string) {
    setToggle((state) => !state)
    setName(name)
  }

  return (
    <modalContext.Provider value={{ toggle, toggleModal, name }}>
      {children}
    </modalContext.Provider>
  )
}
