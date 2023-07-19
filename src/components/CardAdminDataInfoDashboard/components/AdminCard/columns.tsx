/* eslint-disable camelcase */
import { AvatarName } from '@/components/Column/avatarName'
import { GroupInfo } from '@/components/DataTable/components'
import { AvatarStack } from '@/components/ui/avatarStack'
import { ColumnSortingButton } from '@/components/ui/columnSortingButton'
import { MoreButtonTable } from '@/components/ui/moreButtonTable'
import { DotsThreeOutlineVertical } from '@phosphor-icons/react'
import { ColumnDef } from '@tanstack/react-table'

export type AdminTableProps = {
  id: string
  p_id: Promise<string>
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
    cell: async ({ row }) => {
      const { name, image_url, p_id: pId } = row.original
      const phone = await pId

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

      return <AvatarStack users={groups} />
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: async ({ row }) => {
      const phone = await row.original.p_id

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
