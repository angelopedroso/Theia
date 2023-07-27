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
import { Button } from './button'
import { Input } from './input'

import { Table } from '@tanstack/react-table'
import { filterTableContext } from '@/contexts/filterContext'
import { Switch, SwitchThumb } from './switch'

export interface FilterByProps<T> {
  table: Table<T>
  setFilterBy: (filterBy: string) => void
  filter: string
}

export function FilterBy<T>({ table, filter, setFilterBy }: FilterByProps<T>) {
  const { setSearch } = useContext(filterTableContext)

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    table.getColumn(filter)?.setFilterValue(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div className="relative flex w-fit items-center rounded-md border border-slate-855 pr-3 focus-within:border-indigo-600">
      <Input
        placeholder={`Filter ${
          filter === 'chat_name' ? 'chats' : 'usernames'
        }...`}
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
            <DotsThreeOutline className="h-4 w-4 text-gray-200" weight="fill" />
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
            onClick={() => setFilterBy('user_name')}
            className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
          >
            Username
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFilterBy('chat_name')}
            className="text-gray-200 focus:bg-slate-850 focus:text-gray-200"
          >
            Chat
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-slate-850" />
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="cursor-default select-none text-sm text-slate-200">
              Only group
            </span>
            <Switch
              className="h-4 w-8"
              onCheckedChange={(event) =>
                table.getColumn('is_group')?.setFilterValue(event)
              }
              defaultChecked
            >
              <SwitchThumb />
            </Switch>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
