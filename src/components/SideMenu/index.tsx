import { ReactElement, ReactNode, useState } from 'react'

import Image from 'next/image'
import logoApp from '@/assets/logo.svg'

import { routes } from '@/utils/pageRoutes'

import { HouseLine } from 'phosphor-react'
import { OpenCloseButton, MenuButton, SubMenu } from './components'

export interface SideMenuProps {
  children: ReactNode
}

export function SideMenu({ children }: SideMenuProps) {
  const notFoundValidator = children as ReactElement
  const [open, setOpen] = useState(false)

  if (!notFoundValidator.props) {
    return <main>{children}</main>
  }

  return (
    <div className="flex h-screen w-screen">
      <aside
        className={`fixed left-0 top-0 z-10 h-screen space-y-4 p-3 pt-2 ${
          open ? 'w-64' : 'w-20'
        } select-none bg-slate-900 duration-500`}
      >
        <OpenCloseButton open={open} setOpen={setOpen} />
        <header className="flex items-center gap-2">
          <Image
            src={logoApp}
            alt="Logo's icon application"
            className="h-14 w-14"
            priority
          />
          <h1
            className={`origin-left font-main text-xl font-black leading-normal tracking-tighter text-zinc-50 duration-500 sm:text-3xl ${
              !open && 'scale-0'
            }`}
          >
            Theia
          </h1>
        </header>
        <div className="space-y-6 px-2">
          <MenuButton open={open} title="Dashboard" isDash>
            <HouseLine className="text-slate-500" size={22} />
          </MenuButton>

          <SubMenu elements={routes.pages} open={open} title="Pages" />

          <SubMenu elements={routes.utils} open={open} title="Utils" />
        </div>
      </aside>
      <main
        className={`w-full ${
          open ? 'pl-64' : 'pl-20'
        } bg-slate-800 duration-500`}
      >
        {children}
      </main>
    </div>
  )
}
