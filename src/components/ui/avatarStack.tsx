import React, { ReactNode } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { GroupInfo, Participant } from '../GroupDashboardTable/components'

export interface AvatarStackProps {
  users: Participant[] | GroupInfo[]
  children: ReactNode
}

export function AvatarStack({ users, children }: AvatarStackProps) {
  const hasMoreParticipants = users?.length > 3

  return (
    <div className="ml-3 flex">
      {users?.slice(0, 3).map((participant, index) => {
        return (
          <Avatar
            className="-ml-3 h-9 w-9 select-none border-2 border-slate-850"
            key={index}
          >
            <AvatarImage src={participant.image_url} alt={participant.name} />
            <AvatarFallback className="bg-gray-500">{children}</AvatarFallback>
          </Avatar>
        )
      })}
      {hasMoreParticipants && (
        <Avatar className="-ml-3 h-9 w-9 border-2 border-slate-850">
          <AvatarFallback
            className={`bg-indigo-600 ${
              users?.length - 3 > 999 ? 'text-[0.625rem]' : 'text-[0.6875rem]'
            } font-medium text-white`}
          >
            {`+${users?.length - 3}`}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
