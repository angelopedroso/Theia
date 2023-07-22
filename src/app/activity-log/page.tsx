import { getDBData } from '@/api/getDBData'
import { DataTable } from '@/components/DataTable/components'
import { Header } from '@/components/ui/header'
import React from 'react'
import { columns } from './columns'
import { FilterTableProvider } from '@/contexts/filterContext'

export default async function ActivityLogPage() {
  const logData = await getDBData({ uri: 'log', revalidateTimeInSeconds: 10 })

  return (
    <FilterTableProvider>
      <div className="flex h-full flex-col space-y-14 p-8">
        <Header title="Activy Log" subtitle="List of all activity" />
        <main className="flex w-full flex-1 flex-col rounded-lg bg-slate-850 p-4 shadow-md">
          <DataTable
            data={logData}
            columns={columns}
            pageSize={15}
            filterTable
            tableHeight="min-h-[41rem]"
          />
        </main>
      </div>
    </FilterTableProvider>
  )
}
