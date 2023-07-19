import React from 'react'
import { GroupDefaultIcon } from '../groupIcon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { GroupInfo } from '../DataTable/components'
import { UserDefaultIcon } from '../userIcon'

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
          {isGroup ? <GroupDefaultIcon /> : <UserDefaultIcon />}
        </AvatarFallback>
      </Avatar>
      {isGroup ? (
        <h3 className="whitespace-nowrap text-base font-medium leading-normal text-white">
          {data?.name}
        </h3>
      ) : (
        <div className="flex flex-col items-start">
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-white">
            {data?.name}
          </h3>
          <span className="text-sm leading-normal text-slate-500">
            {data.phone}
          </span>
        </div>
      )}
    </div>
  )
}
