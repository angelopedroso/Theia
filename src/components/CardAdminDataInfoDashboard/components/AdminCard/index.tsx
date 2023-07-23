import React from 'react'
import { column } from './columns'
import { getDBData } from '@/api/getDBData'
import { DataTable } from '@/components/GroupDashboardTable/components'

export async function AdminCard() {
  const data = await getDBData({
    uri: 'users/admin',
    revalidateTimeInSeconds: 60 * 10,
  })

  return (
    <section className="flex max-w-full flex-col items-start rounded-lg bg-slate-850 pb-4 shadow-md">
      <header>
        <h2 className="p-4 text-base leading-normal text-gray-100">Admins</h2>
      </header>
      <main className="w-full">
        <DataTable
          columns={column}
          data={data}
          tableWidth="w-full xl:w-156"
          tableHeight="min-h-xl"
        />
      </main>
    </section>
  )
}
