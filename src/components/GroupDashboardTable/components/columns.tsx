'use client'

import { Progress } from '@/components/ui/progress'

import { AvatarStack } from '@/components/ui/avatarStack'

import { ColumnDef } from '@tanstack/react-table'

import { DotsThreeOutline } from '@phosphor-icons/react'

import { AvatarName } from '@/components/ui/avatarName'
import { ColumnSortingButton } from '@/components/ui/columnSortingButton'
import { MoreButtonTable } from '@/components/ui/moreButtonTable'
import { DefaultUserIcon } from '@/components/userIcon'

export type Participant = { name: string; image_url: string | undefined }
export type GroupInfo = {
  inviteCode?: string
  image_url: string
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
      return <ColumnSortingButton isGroup column={column} title="Group name" />
    },
    cell: ({ row }) => {
      const groupInfo = row.getValue('group_info') as GroupInfo

      return <AvatarName data={groupInfo} isGroup />
    },
  },

  {
    accessorKey: 'participants',
    header: ({ column }) => {
      return (
        <ColumnSortingButton isGroup column={column} title="Participants" />
      )
    },
    cell: ({ row }) => {
      return (
        <AvatarStack users={row.getValue('participants')}>
          <DefaultUserIcon />
        </AvatarStack>
      )
    },
  },
  {
    accessorKey: 'black_list',
    header: ({ column }) => {
      return <ColumnSortingButton isGroup column={column} title="Black list" />
    },
    cell: ({ row }) => {
      if (!row.original.black_list?.length) {
        return (
          <div className="flex p-2">
            <span className="whitespace-nowrap text-sm font-medium text-gray-300 ">
              Black list is empty
            </span>
          </div>
        )
      }

      return (
        <AvatarStack users={row.getValue('black_list')}>
          <DefaultUserIcon />
        </AvatarStack>
      )
    },
  },
  {
    accessorKey: 'participants_filled',
    header: () => {
      return (
        <div>
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
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
        <div className={`flex items-center justify-start gap-2 py-2`}>
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
        <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
          Invite code
        </h3>
      </div>
    ),
    cell: ({ row }) => {
      const groupInfo = row.getValue('group_info') as GroupInfo

      if (!groupInfo?.inviteCode) {
        return (
          <div className="flex p-2">
            <span className="whitespace-nowrap text-sm font-medium text-gray-300">
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
        <MoreButtonTable data={{ id: groupId, desc: 'Copy group ID' }}>
          <DotsThreeOutline className="h-4 w-4 text-gray-200" weight="fill" />
        </MoreButtonTable>
      )
    },
  },
]
