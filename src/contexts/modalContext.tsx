'use client'

import { ReactNode, createContext, useState } from 'react'

interface ModalContextProps {
  toggle: boolean
  alert: boolean
  name: string
  toggleModal: (name: string) => void
  handleAlertModal: (value: boolean) => void
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
  const [alert, setAlert] = useState(false)

  function toggleModal(name: string) {
    setToggle((state) => !state)
    setName(name)
  }

  function handleAlertModal(value: boolean) {
    setAlert(value)
  }

  return (
    <modalContext.Provider
      value={{ toggle, toggleModal, name, alert, handleAlertModal }}
    >
      {children}
    </modalContext.Provider>
  )
}
