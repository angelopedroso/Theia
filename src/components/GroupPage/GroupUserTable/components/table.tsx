'use client'

import { NoResults } from '@/components/noResults'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/tableButton'
import { getWindowWidth } from '@/utils/windowWidth'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import React, { useEffect, useState } from 'react'
import { FilterBy } from './filterTable'

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  groupId: string
  tableWidth?: string
  tableHeight?: string
  pageSize?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  groupId,
  tableWidth = '',
  tableHeight = 'min-h-2xl',
  pageSize = 5,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [filterBy, setFilterBy] = useState('name')
  const [rowSelection, setRowSelection] = useState({})

  const [windowWidth, setWindowWidth] = useState(false)

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { columnVisibility: { p_id: false } },
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
      sorting,
      columnFilters,
    },
  })

  useEffect(() => {
    setWindowWidth(getWindowWidth(480))
    table.setPageSize(windowWidth ? pageSize : 5)
  }, [pageSize, table, windowWidth])

  return (
    <div className="space-y-8">
      <FilterBy
        group={groupId}
        filter={filterBy}
        setFilterBy={setFilterBy}
        table={table}
      />

      <div
        className={`grid ${
          windowWidth ? tableHeight : 'min-h-xl'
        } grid-rows-table overflow-hidden xs:overflow-auto`}
      >
        <Table className={`relative ${tableWidth}`}>
          <TableHeader className="rounded-lg border-none bg-slate-825">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-t border-slate-855 data-[state=selected]:bg-slate-600 hover:bg-slate-825"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows?.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="border-none data-[state=selected]:bg-slate-600 hover:bg-slate-700"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="border-none hover:bg-transparent">
                <TableCell colSpan={columns?.length} className="h-[33.8rem]">
                  <NoResults />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}
