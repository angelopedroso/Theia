'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { AvatarStack } from '@/components/ui/avatarStack'

import { ColumnDef } from '@tanstack/react-table'

import { DotsThreeOutline, Users } from '@phosphor-icons/react'
import { ColumnSortingButton } from '@/components/ui/columnSortingButton'

export type Participant = { name: string; image_url: string | undefined }
type GroupInfo = {
  inviteCode: string
  url: string
  name: string
}

export type GroupTableProps = {
  id: string
  g_id: string
  group_info: GroupInfo
  black_list: Participant[]
  participants: Participant[]
}

export const columns: ColumnDef<GroupTableProps>[] = [
  {
    accessorKey: 'group_info',
    header: ({ column }) => {
      return <ColumnSortingButton column={column} title="Group name" />
    },
    cell: ({ row }) => {
      const groupInfo = row.getValue('group_info') as GroupInfo

      return (
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={groupInfo?.url} />
            <AvatarFallback className="bg-gray-500">
              <Users size={20} weight="fill" className="text-gray-200" />
            </AvatarFallback>
          </Avatar>
          <h3 className="text-base font-medium leading-normal text-white">
            {groupInfo?.name}
          </h3>
        </div>
      )
    },
  },

  {
    accessorKey: 'participants',
    header: ({ column }) => {
      return <ColumnSortingButton column={column} title="Participants" />
    },
    cell: ({ row }) => {
      return <AvatarStack users={row.getValue('participants')} />
    },
  },
  {
    accessorKey: 'black_list',
    header: ({ column }) => {
      return <ColumnSortingButton column={column} title="Black list" />
    },
    cell: ({ row }) => {
      if (!row.original.black_list.length) {
        return (
          <div className="flex p-2">
            <span className="text-sm font-medium text-gray-300 ">
              Black list is empty
            </span>
          </div>
        )
      }

      return <AvatarStack users={row.getValue('black_list')} />
    },
  },
  {
    accessorKey: 'participants_filled',
    header: () => {
      return (
        <div>
          <h3 className="text-sm font-medium leading-normal text-gray-100">
            Positions filled
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      const data = [
        { value: row.original.participants?.length },
        { value: 1024 - row.original.participants?.length },
      ]

      const totalValue = data.reduce((total, entry) => total + entry.value, 0)
      const percentage = Number(((data[0].value / totalValue) * 100).toFixed(0))

      return (
        <div className={`flex items-center justify-start gap-2 p-2`}>
          <div className="flex w-8 justify-center">
            <span className="text-sm text-gray-200">{`${percentage}%`}</span>
          </div>
          <Progress
            value={percentage}
            className="h-1 w-24 border-none bg-slate-855"
          />
        </div>
      )
    },
  },
  {
    accessorKey: 'invite_code',
    header: () => (
      <div>
        <h3 className="text-sm font-medium leading-normal text-gray-100">
          Invite Code
        </h3>
      </div>
    ),
    cell: ({ row }) => {
      const groupInfo = row.getValue('group_info') as GroupInfo

      if (!groupInfo?.inviteCode) {
        return (
          <div className="flex p-2">
            <span className="text-sm font-medium text-gray-300">
              Bot isn&apos;t admin of the group
            </span>
          </div>
        )
      }

      return (
        <div className="flex w-52 p-2">
          <a
            href={groupInfo?.inviteCode}
            target="_blank"
            className="cursor-pointer break-all text-sm font-medium text-indigo-500 duration-200 hover:text-indigo-400"
            rel="noreferrer"
          >
            {groupInfo?.inviteCode}
          </a>
        </div>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const groupId = row.original.g_id.replace('@g.us', '')

      return (
        <div className="flex items-center justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={'ghost'}
                className="h-8 w-8 border border-transparent p-0 hover:border-slate-800 hover:bg-slate-750 hover:text-gray-100"
              >
                <span className="sr-only">Open menu</span>
                <DotsThreeOutline
                  className="h-4 w-4 text-gray-200"
                  weight="fill"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-slate-855 bg-slate-875"
            >
              <DropdownMenuLabel className="text-gray-300">
                Actions
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(groupId)}
                className="text-gray-200 hover:bg-indigo-600"
              >
                Copy group ID
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
