'use client'

import React, { ReactNode } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DefaultGroupIcon } from '../groupIcon'
import { SignOut, UsersFour } from '@phosphor-icons/react'
import { CardSettings, CardSettingsProps } from './cardSettings'

import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardMotion,
} from '../ui/card'

type CardGroupProps = {
  data: GroupsProps
  children?: ReactNode
  toggle?: () => void
  isModal?: boolean
}

export function CardGroup({ isModal = false, ...props }: CardGroupProps) {
  const groupSettings: CardSettingsProps[] = [
    {
      name: 'Welcome',
      status: props.data.bem_vindo,
    },
    {
      name: 'Link detector',
      status: props.data.anti_link,
    },
    {
      name: 'Malicious content detector',
      status: props.data.anti_porn,
    },
    {
      name: 'Freezing whatsapp detector',
      status: props.data.anti_trava.status,
    },
    {
      name: 'Auto group invite link',
      status: props.data.auto_invite_link,
    },
    {
      name: 'Auto sticker',
      status: props.data.auto_sticker,
    },
  ]

  return (
    <CardMotion
      className={`${
        !isModal && 'min-h-4xl'
      } select-none border-slate-855 bg-slate-850 lg:min-h-full ${
        isModal && 'relative h-auto'
      }`}
      onClick={props.toggle}
      whileHover={{ scale: !isModal ? 1.05 : 1.0 }}
    >
      <CardHeader className="flex items-center justify-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={props.data.group_info?.image_url} />
          <AvatarFallback className="bg-gray-500">
            <DefaultGroupIcon />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-white">
          {props.data.group_info.name}
        </CardTitle>
        <CardDescription>
          {props.data.group_info.inviteCode && (
            <a
              href={props.data.group_info.inviteCode}
              target="_blank"
              className="cursor-pointer break-all text-sm font-medium text-indigo-500 duration-200 hover:text-indigo-400"
              rel="noreferrer"
            >
              {props.data.group_info.inviteCode}
            </a>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UsersFour size={24} weight="fill" className="text-indigo-600" />
            <span className="font-menu text-sm font-medium text-slate-500">
              {props.data.participants.length} participants
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SignOut size={24} weight="fill" className="text-indigo-600" />
            <span className="font-menu text-sm font-medium text-slate-500">
              {props.data.black_list.length
                ? `${props.data.black_list.length} blacklisted participants`
                : 'No blacklisted participants'}
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-md pb-4 pt-6 font-menu-sub font-bold uppercase leading-normal text-slate-600">
            Settings
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {groupSettings.map((setting) => (
              <CardSettings key={setting.name} {...setting} />
            ))}
          </div>
        </div>
      </CardContent>
      {props.children}
    </CardMotion>
  )
}
