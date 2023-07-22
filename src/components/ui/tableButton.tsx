import React from 'react'
import { Button } from './button'
import { Table } from '@tanstack/react-table'

export interface DataTablePaginationProps<T> {
  table: Table<T>
}

export function DataTablePagination<T>(props: DataTablePaginationProps<T>) {
  return (
    <div className="flex items-center justify-end space-x-2 border-t border-slate-855 p-4 pb-0">
      <Button
        variant="outline"
        size="sm"
        onClick={() => props.table.previousPage()}
        disabled={!props.table.getCanPreviousPage()}
        className="border border-indigo-700 bg-indigo-600 text-white hover:border-indigo-600 hover:bg-indigo-500 hover:text-white"
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => props.table.nextPage()}
        disabled={!props.table.getCanNextPage()}
        className="border border-indigo-700 bg-indigo-600 text-white hover:border-indigo-600 hover:bg-indigo-500 hover:text-white"
      >
        Next
      </Button>
    </div>
  )
}
