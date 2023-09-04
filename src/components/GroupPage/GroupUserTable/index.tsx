'use client'

import { Header } from '@/components/ui'
import React from 'react'
import { DataTable } from './components/table'
import { column } from './components/column'

export interface GroupUserTableProps {
  data: GroupsProps
}

export function GroupUserTable({ data }: GroupUserTableProps) {
  return (
    <div className="h-full w-full space-y-10 rounded-lg bg-slate-850 p-6 shadow-md lg:w-4/5">
      <div className="mb-6 space-y-6">
        <Header
          title="Participants"
          subtitle="Current participants in the group"
          className="mb-0"
        />
        <div className="-mx-6 h-px bg-slate-750" />
      </div>
      <DataTable
        groupId={data.g_id}
        data={data?.participants}
        columns={column}
        pageSize={15}
        tableHeight="min-h-[41rem]"
      />
    </div>
  )
}
