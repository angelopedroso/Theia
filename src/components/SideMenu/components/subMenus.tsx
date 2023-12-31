'use client'

import { IconProps } from '@phosphor-icons/react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MenuButton } from './menuButton'

type Element = {
  title: string
  url: string
  Component: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export interface SubMenuProps {
  title: string
  open: boolean
  elements: Element[]
}

export function SubMenu({ title, open, elements }: SubMenuProps) {
  return (
    <nav>
      <h2
        className={`p-2 font-menu-sub text-xs font-bold uppercase leading-normal text-slate-500 ${
          !open && 'hidden'
        } origin-left duration-200`}
      >
        {title}
      </h2>

      {elements.map(({ Component, ...page }) => {
        return (
          <MenuButton
            key={page.title}
            open={open}
            title={page.title}
            url={page.url}
          >
            <Component className="text-gray-600" size={22} />
          </MenuButton>
        )
      })}
    </nav>
  )
}
