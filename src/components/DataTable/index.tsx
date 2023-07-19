import React from 'react'
import { DataTable, columns } from './components'
import { getGroups } from '@/api/axios/getGroups'

export async function GroupTable() {
  const data = await getGroups()

  return (
    <article className="mr-7 flex flex-col items-start rounded-lg bg-slate-850 shadow-md sm:mr-0">
      <header>
        <h2 className="p-4 text-base leading-normal text-gray-100">
          Active Groups
        </h2>
      </header>
      <main className="w-full">
        <DataTable columns={columns} data={data} />
      </main>
    </article>
  )
}
