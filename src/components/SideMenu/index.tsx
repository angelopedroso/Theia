import { ReactElement, ReactNode, useState } from 'react'

import Image from 'next/image'
import logoApp from '@/assets/logo.svg'

import { routes } from '@/utils/pageRoutes'
import { OpenCloseButton } from './openCloseButton'
import { MenuButton } from './menuButton'

import { HouseLine } from 'phosphor-react'
import { SubMenu } from './subMenus'

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
    <div className="flex">
      <aside
        className={`relative space-y-4 p-3 pt-2 ${
          open ? 'w-64' : 'w-20'
        } select-none bg-slate-900 duration-500`}
      >
        <OpenCloseButton open={open} setOpen={setOpen} />
        <div className="flex items-center gap-2">
          <Image
            src={logoApp}
            alt="Logo's icon application"
            width={55}
            height={55}
            priority
          />
          <h1
            className={`origin-left text-3xl font-black leading-normal tracking-tighter text-zinc-50 duration-500 ${
              !open && 'scale-0'
            }`}
          >
            Theia
          </h1>
        </div>
        <div className="space-y-6 px-2">
          <MenuButton open={open} title="Dashboard" isDash>
            <HouseLine className="text-slate-500" size={22} />
          </MenuButton>

          <SubMenu elements={routes.pages} open={open} title="Pages" />

          <SubMenu elements={routes.utils} open={open} title="Utils" />
        </div>
      </aside>
      <main className="flex-1 bg-slate-800">{children}</main>
    </div>
  )
}
