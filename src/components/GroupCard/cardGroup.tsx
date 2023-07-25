'use client'

import React, { ReactNode } from 'react'
import {
  CardContentMotion,
  CardDescription,
  CardHeaderMotion,
  CardMotion,
  CardTitle,
} from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DefaultGroupIcon } from '../groupIcon'
import { SignOut, UsersFour } from '@phosphor-icons/react'
import { CardSettings, CardSettingsProps } from './cardSettings'
import { motion } from 'framer-motion'

type CardGroupProps = GroupsProps & {
  children?: ReactNode
}

function CardGroup(props: CardGroupProps) {
  const groupSettings: CardSettingsProps[] = [
    {
      name: 'Welcome',
      status: props.bem_vindo,
    },
    {
      name: 'Link detector',
      status: props.anti_link,
    },
    {
      name: 'Malicious content detector',
      status: props.anti_porn,
    },
    {
      name: 'Freezing whatsapp detector',
      status: props.anti_trava.status,
    },
    {
      name: 'Auto group invite link',
      status: props.auto_invite_link,
    },
    {
      name: 'Auto sticker',
      status: props.auto_sticker,
    },
  ]

  return (
    <CardMotion className="min-h-4xl select-none border-slate-855 bg-slate-850 lg:min-h-full">
      <CardHeaderMotion className="flex items-center justify-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={props.group_info?.image_url} />
          <AvatarFallback className="bg-gray-500">
            <DefaultGroupIcon />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-white">{props.group_info.name}</CardTitle>
        <CardDescription>
          {props.group_info.inviteCode && (
            <a
              href={props.group_info.inviteCode}
              target="_blank"
              className="cursor-pointer break-all text-sm font-medium text-indigo-500 duration-200 hover:text-indigo-400"
              rel="noreferrer"
            >
              {props.group_info.inviteCode}
            </a>
          )}
        </CardDescription>
      </CardHeaderMotion>
      <CardContentMotion className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UsersFour size={24} weight="fill" className="text-indigo-600" />
            <span className="font-menu text-sm font-medium text-slate-500">
              {props.participants.length} participants
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SignOut size={24} weight="fill" className="text-indigo-600" />
            <span className="font-menu text-sm font-medium text-slate-500">
              {props.black_list.length
                ? `${props.black_list.length} blacklisted participants`
                : 'No blacklisted participants'}
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-md pb-4 pt-6 font-menu-sub font-bold uppercase leading-normal text-slate-600">
            Settings
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {groupSettings.map((setting) => (
              <CardSettings key={setting.name} {...setting} />
            ))}
          </div>
        </div>
      </CardContentMotion>
      {props.children}
    </CardMotion>
  )
}

const CardGroupMotion = motion(CardGroup)

export { CardGroupMotion }
