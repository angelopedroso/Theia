import { DataTable } from '@/components/DataTable/components'
import React from 'react'
import { column } from './columns'
import { getDBData } from '@/api/axios/getDBData'

export async function AdminCard() {
  const data = await getDBData({
    uri: 'users/admin',
    revalidateTimeInSeconds: 60 * 10,
  })

  return (
    <div>
      <header>
        <h2 className="p-4 text-base leading-normal text-gray-100">Admins</h2>
      </header>
      <main>
        <DataTable columns={column} data={data} />
      </main>
    </div>
  )
}
