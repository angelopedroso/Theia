'use client'

import { DotsThreeOutline } from '@phosphor-icons/react'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import React, { useContext } from 'react'

import { Table } from '@tanstack/react-table'
import { filterTableContext } from '@/contexts/filterContext'
import { Button, Input } from '@/components/ui'
import { AlertDialogComp } from '@/components/alertDialog'

import { removeParticipant } from '@/api/actions/query'
import { useToast } from '@/components/ui/use-toast'

export interface FilterByProps<T> {
  table: Table<T>
  setFilterBy: (filterBy: string) => void
  filter: string
  group: string
}

export function FilterBy<T>({
  group,
  table,
  filter,
  setFilterBy,
}: FilterByProps<T>) {
  const { setSearch } = useContext(filterTableContext)
  const { toast } = useToast()

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    table.getColumn(filter)?.setFilterValue(event.target.value)
    setSearch(event.target.value)
  }

  // async function handleRemoveFilter() {
  //   const formattedUserId = table
  //     .getFilteredSelectedRowModel()
  //     .rows.map(({ original }) => {
  //       const formattedId = original as { p_id: string }

  //       return `${formattedId.p_id}@c.us`
  //     })

  //   await removeParticipant({ users: formattedUserId, group })

  //   toast({
  //     title: 'Successfully',
  //     description: 'User(s) has been removed from group!',
  //   })

  //   table.resetRowSelection()
  // }

  return (
    <div className="flex w-full items-center justify-between gap-2 sm:gap-0">
      <div className="relative flex w-fit items-center rounded-md border border-slate-855 pr-3 focus-within:border-indigo-600">
        <Input
          placeholder={`Filter ${filter === 'name' ? 'names' : 'phones'}...`}
          value={(table.getColumn(filter)?.getFilterValue() as string) ?? ''}
          onChange={(event) => handleChangeSearch(event)}
          className="max-w-sm border-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

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
            className="border-slate-850 bg-slate-855"
          >
            <DropdownMenuLabel className="text-gray-300">
              Filter by
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-850" />
            <DropdownMenuItem
              onClick={() => setFilterBy('name')}
              className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
            >
              Name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFilterBy('p_id')}
              className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
            >
              Phone
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* <div>
        {table.getFilteredSelectedRowModel().rows?.length > 0 && (
          <AlertDialogComp onRemove={handleRemoveFilter} />
        )}
      </div> */}
    </div>
  )
}
