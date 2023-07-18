import React from 'react'
import { UserDefaultIcon } from '../userIcon'
import { Participant } from '../DataTable/components'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

export interface AvatarStackProps {
  users: Participant[]
}

export function AvatarStack(props: AvatarStackProps) {
  const participants = props.users
  const hasMoreParticipants = participants.length > 3

  return (
    <div className="flex">
      <div className="flex first:-ml-0">
        {participants.slice(0, 3).map((participant, index) => {
          return (
            <Avatar className="-ml-3 h-9 w-9 border border-white" key={index}>
              <AvatarImage src={participant.image_url} alt={participant.name} />
              <AvatarFallback className="border border-white">
                <UserDefaultIcon />
              </AvatarFallback>
            </Avatar>
          )
        })}
        {hasMoreParticipants && (
          <Avatar className="-ml-3 h-9 w-9 border border-white">
            <AvatarFallback className="bg-indigo-600 text-xs font-medium text-white">
              {`+${participants.length - 3}`}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  )
}
