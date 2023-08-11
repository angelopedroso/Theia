'use client'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'
import { DotsThreeOutline } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { BotFormulary, BotFormularyProps } from './botFormulary'
import { getDBData } from '@/api/getDBData'

export interface DropDownBotSettingsProps {
  open: boolean
}
export function DropDownBotSettings({ open = true }: DropDownBotSettingsProps) {
  const [data, setData] = useState<BotFormularyProps>({
    id: '',
    private: false,
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDBData({
        uri: 'bot',
        revalidateTimeInSeconds: 60 * 10,
      })

      setData(data)
    }

    fetchData()
  }, [])

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
