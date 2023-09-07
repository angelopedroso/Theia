import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'
import { DotsThreeOutline } from '@phosphor-icons/react'
import React from 'react'
import { BotFormulary } from './botFormulary'

export interface DropDownBotSettingsProps {
  open: boolean
  data: { id: string; private: boolean }
}
export function DropDownBotSettings({
  open = true,
  data,
}: DropDownBotSettingsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex w-full items-center justify-start gap-2 rounded-md border border-transparent p-2 hover:border-slate-800  hover:bg-slate-750 hover:text-gray-100">
          <DotsThreeOutline className="text-gray-600" size={20} weight="fill" />
          <span
            className={`font-menu text-sm ${
              !open && 'hidden'
            } w-max origin-left font-medium text-gray-50 duration-500`}
          >
            Settings
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="right"
        className="border-slate-855 bg-slate-900"
      >
        <DropdownMenuLabel className="text-gray-300">
          Bot settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-850" />

        <BotFormulary {...data} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
