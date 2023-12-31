'use client'

import { ReactNode, useState } from 'react'

import Image from 'next/image'
import logoApp from '@/assets/logo.svg'

import { routes } from '@/utils/pageRoutes'

import { useSelectedLayoutSegment } from 'next/navigation'

import { HouseLine } from '@phosphor-icons/react'
import { OpenCloseButton, MenuButton, SubMenu } from './components'
import { DropDownBotSettings } from './components/dropDownBotSettings'

export interface SideMenuProps {
  children: ReactNode
  botData: { id: string; private: boolean }
}

export function SideMenu({ children, botData }: SideMenuProps) {
  const blockedSideBar = ['__DEFAULT__', 'login']
  const isNotFound = blockedSideBar.includes(useSelectedLayoutSegment() + '')

  const [open, setOpen] = useState(false)

  if (isNotFound) {
    return <main>{children}</main>
  }

  return (
    <div>
      <aside
        className={`fixed left-0 top-0 z-10 flex h-full min-h-full flex-col space-y-4 p-3 pt-2 ${
          open ? 'sm:w-64' : 'w-20'
        } ${open && 'w-40'} select-none bg-slate-900 duration-500`}
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
            className={`origin-left text-xl font-black leading-normal tracking-tighter text-zinc-50 duration-500 sm:text-3xl ${
              !open && 'scale-0'
            }`}
          >
            Theia
          </h1>
        </header>
        <div className="flex flex-1 flex-col justify-between px-2">
          <div className="space-y-6">
            <MenuButton open={open} title="Dashboard" isDash>
              <HouseLine className="text-slate-500" size={22} />
            </MenuButton>

            <SubMenu elements={routes.pages} open={open} title="Pages" />

            <SubMenu elements={routes.utils} open={open} title="Utils" />
          </div>
          <div>
            <DropDownBotSettings open={open} data={botData} />
          </div>
        </div>
      </aside>
      <div
        className={`min-h-screen w-full ${open ? 'sm:pl-64' : 'pl-20'} ${
          open && 'pl-40'
        } bg-slate-800 duration-500`}
      >
        {children}
      </div>
    </div>
  )
}
