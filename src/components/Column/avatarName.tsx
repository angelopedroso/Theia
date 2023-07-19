import React from 'react'
import { GroupDefaultIcon } from '../groupIcon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { GroupInfo } from '../DataTable/components'
import { UserDefaultIcon } from '../userIcon'

export interface AvatarNameProps {
  data: GroupInfo
  defaultIconType?: 'group' | 'user'
}

export function AvatarName({
  data,
  defaultIconType = 'group',
}: AvatarNameProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data?.url} />
        <AvatarFallback className="bg-gray-500">
          {defaultIconType === 'group' ? (
            <GroupDefaultIcon />
          ) : (
            <UserDefaultIcon />
          )}
        </AvatarFallback>
      </Avatar>
      <h3 className="whitespace-nowrap text-base font-medium leading-normal text-white">
        {data?.name}
      </h3>
    </div>
  )
}
