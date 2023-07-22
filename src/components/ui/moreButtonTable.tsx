'use client'

import React, { ReactNode } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Button } from './button'

export interface MoreButtonTableProps {
  data: { id: string; desc: string; menuTitle?: string }
  children: ReactNode
}

export function MoreButtonTable(props: MoreButtonTableProps) {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'ghost'}
            className="h-8 w-8 border border-transparent p-0 hover:border-slate-800 hover:bg-slate-750 hover:text-gray-100"
          >
            <span className="sr-only">Open menu</span>
            {props.children}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border-slate-850 bg-slate-855"
        >
          <DropdownMenuLabel className="text-gray-300">
            {props.data.menuTitle || 'Actions'}
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={async () =>
              await navigator.clipboard.writeText(props.data.id)
            }
            className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
          >
            {props.data.desc}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
