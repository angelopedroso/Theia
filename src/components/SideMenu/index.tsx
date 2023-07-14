import { ReactElement, ReactNode } from 'react'

export interface SideMenuProps {
  children: ReactNode
}

export function SideMenu({ children }: SideMenuProps) {
  const notFoundValidator = children as ReactElement

  if (!notFoundValidator.props) {
    return <main>{children}</main>
  }

  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <aside>
        <div></div>
      </aside>
      <main>{children}</main>
    </div>
  )
}
