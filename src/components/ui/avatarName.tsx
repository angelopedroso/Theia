import React from 'react'
import { DefaultGroupIcon } from '../groupIcon'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { DefaultUserIcon } from '../userIcon'
import { GroupInfo } from '../GroupDashboardTable/components'

export interface AvatarNameProps {
  data: GroupInfo & { phone?: string }
  isGroup?: boolean
}

export function AvatarName({ data, isGroup }: AvatarNameProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data?.image_url} />
        <AvatarFallback className="bg-gray-500">
          {isGroup ? <DefaultGroupIcon /> : <DefaultUserIcon />}
        </AvatarFallback>
      </Avatar>
      {isGroup ? (
        <h3 className="whitespace-nowrap text-base font-medium leading-normal text-white">
          {data?.name}
        </h3>
      ) : (
        <div className="flex select-none flex-col items-start">
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-white">
            {data?.name}
          </h3>
          <span className="whitespace-nowrap text-sm leading-normal text-slate-500">
            {data.phone}
          </span>
        </div>
      )}
    </div>
  )
}
