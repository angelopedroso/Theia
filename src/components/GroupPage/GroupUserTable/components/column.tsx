'use client'

import {
  AvatarName,
  Button,
  ColumnSortingButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { DotsThreeOutlineVertical } from '@phosphor-icons/react'
/* eslint-disable camelcase */
import { ColumnDef } from '@tanstack/react-table'

export const column: ColumnDef<Participant>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-slate-600 data-[state=checked]:border-indigo-600 data-[state=checked]:bg-indigo-600"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-slate-600 data-[state=checked]:border-indigo-600 data-[state=checked]:bg-indigo-600"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: 'p_id',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const phone = row.original.p_id

      return (
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={'ghost'}
                className="h-8 w-8 border border-transparent p-0 hover:border-slate-800 hover:bg-slate-750 hover:text-gray-100"
              >
                <span className="sr-only">Open menu</span>
                <DotsThreeOutlineVertical
                  className="h-4 w-4 text-gray-200"
                  weight="fill"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-slate-850 bg-slate-855"
            >
              <DropdownMenuLabel className="text-gray-300">
                Actions
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={async () => await navigator.clipboard.writeText(phone)}
                className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
              >
                Copy phone number
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => await navigator.clipboard.writeText(phone)}
                className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
              >
                Remove participant from group
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
