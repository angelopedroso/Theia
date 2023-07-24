'use client'

/* eslint-disable camelcase */
import { AvatarName } from '@/components/ui/avatarName'
import { AvatarStack } from '@/components/ui/avatarStack'
import { ColumnSortingButton } from '@/components/ui/columnSortingButton'
import { MoreButtonTable } from '@/components/ui/moreButtonTable'
import { DotsThreeOutlineVertical } from '@phosphor-icons/react'
import { ColumnDef } from '@tanstack/react-table'
import { DefaultGroupIcon } from '@/components/groupIcon'
import { GroupInfo } from '@/components/GroupDashboardTable/components'

export type AdminTableProps = {
  id: string
  p_id: string
  name: string
  image_url: string
  groups: GroupInfo[]
}

export const column: ColumnDef<AdminTableProps>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <ColumnSortingButton column={column} title="Name" />
    },
    cell: ({ row }) => {
      const { name, image_url, p_id: phone } = row.original

      return <AvatarName data={{ name, phone, image_url }} />
    },
  },
  {
    accessorKey: 'groups',
    header: () => {
      return (
        <div>
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
            Groups
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      const groups = row.original.groups

      return (
        <AvatarStack users={groups}>
          <DefaultGroupIcon />
        </AvatarStack>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const phone = row.original.p_id

      return (
        <MoreButtonTable data={{ id: phone, desc: 'Copy phone number' }}>
          <DotsThreeOutlineVertical
            className="h-4 w-4 text-gray-200"
            weight="fill"
          />
        </MoreButtonTable>
      )
    },
  },
]
