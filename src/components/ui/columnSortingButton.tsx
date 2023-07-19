import React from 'react'
import { CaretUpDown } from '@phosphor-icons/react'
import { Column } from '@tanstack/react-table'
import { GroupTableProps } from '../DataTable/components'
import { Button } from './button'

export interface columnButtonSortingProps {
  title: string
  column: Column<GroupTableProps, unknown>
}

export function ColumnSortingButton({
  title,
  column,
}: columnButtonSortingProps) {
  return (
    <Button
      variant={'ghost'}
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      className={
        'whitespace-nowrap border border-transparent text-sm font-medium leading-normal text-gray-100 hover:border-slate-800 hover:bg-slate-750 hover:text-gray-100'
      }
    >
      {title}
      <CaretUpDown className="ml-2 h-4 w-4" weight="fill" />
    </Button>
  )
}
