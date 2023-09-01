'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CheckFat, X } from '@phosphor-icons/react'

import { ColumnSortingButton } from '@/components/ui/columnSortingButton'
import { formatDate } from '@/utils/formatValues'

export type LogTableProps = {
  id: string
  groupId: string
  is_group: boolean
  command: string
  user_name: string
  chat_name: string
  date_time: string
}

export const columns: ColumnDef<LogTableProps>[] = [
  {
    accessorKey: 'command',
    header: () => {
      return (
        <div>
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
            Command
          </h3>
        </div>
      )
    },
    cell: ({ row }) => (
      <span className="text-sm text-gray-200">{row.getValue('command')}</span>
    ),
  },
  {
    accessorKey: 'user_name',
    header: ({ column }) => {
      return <ColumnSortingButton isGroup column={column} title="Username" />
    },
    cell: ({ row }) => (
      <span className="text-sm text-gray-200">{row.getValue('user_name')}</span>
    ),
  },
  {
    accessorKey: 'chat_name',
    header: ({ column }) => {
      return <ColumnSortingButton isGroup column={column} title="Chat" />
    },
    cell: ({ row }) => (
      <span className="text-sm text-gray-200">{row.getValue('chat_name')}</span>
    ),
  },
  {
    accessorKey: 'is_group',
    header: () => {
      return (
        <div>
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
            Group?
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      const isGroup = row.original.is_group

      return (
        <div className="flex w-8 justify-center">
          {isGroup ? (
            <CheckFat weight="fill" className="text-indigo-600" />
          ) : (
            <X weight="bold" className="text-indigo-600" />
          )}
        </div>
      )
    },
  },
  {
    accessorKey: 'date_time',
    header: () => {
      return (
        <div>
          <h3 className="text-sm font-medium leading-normal text-gray-100">
            Datetime
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex w-fit">
          <span className="text-sm text-gray-200">{`${formatDate(
            row.original.date_time,
          )}`}</span>
        </div>
      )
    },
  },
]
