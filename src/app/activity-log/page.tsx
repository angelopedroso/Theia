import { getDBData } from '@/api/getDBData'
import { Header } from '@/components/ui/header'
import React from 'react'
import { columns } from './columns'
import { DataTable } from '@/components/dataTable'

export default async function ActivityLogPage() {
  const logData = await getDBData({ uri: 'log', revalidateTimeInSeconds: 10 })

  return (
    <div className="flex h-full flex-col p-8">
      <Header title="Activy Log" subtitle="List of all activity" />
      <main className="flex w-full flex-1 flex-col rounded-lg bg-slate-850 p-4 shadow-md">
        <DataTable
          data={logData}
          columns={columns}
          pageSize={15}
          tableHeight="min-h-[41rem]"
          filterTable
        />
      </main>
    </div>
  )
}
