import React from 'react'
import { DataTable, columns } from './components'
import { getDBData } from '@/api/getDBData'

export async function GroupTable() {
  const data = await getDBData({
    uri: 'groups',
    revalidateTimeInSeconds: 60 * 5,
  })

  return (
    <section className="flex flex-col items-start rounded-lg bg-slate-850 pb-4 shadow-md">
      <header>
        <h2 className="p-4 text-base leading-normal text-gray-100">
          Active Groups
        </h2>
      </header>
      <main className="w-full">
        <DataTable columns={columns} data={data} />
      </main>
    </section>
  )
}
