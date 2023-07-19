import React from 'react'
import { CaretUpDown } from '@phosphor-icons/react'
import { Column } from '@tanstack/react-table'
import { Button } from './button'

export interface columnButtonSortingProps<T> {
  title: string
  column: Column<T, unknown>
  isGroup?: boolean
}

export function ColumnSortingButton<T>({
  title,
  column,
  isGroup,
}: columnButtonSortingProps<T>) {
  return (
    <Button
      variant={'ghost'}
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      className={`whitespace-nowrap border border-transparent leading-normal hover:border-slate-800 hover:bg-slate-750 ${
        isGroup
          ? 'text-sm font-medium  text-gray-100 hover:text-gray-100'
          : 'text-xs font-semibold text-gray-200 hover:text-gray-200'
      }`}
    >
      {title}
      <CaretUpDown className="ml-2 h-4 w-4" weight="fill" />
    </Button>
  )
}
