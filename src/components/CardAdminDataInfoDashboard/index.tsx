import React from 'react'
import { AdminCard, ChartCommands } from './components'
import { getDBData } from '@/api/getDBData'
import { DataTotalLogByGroupProps } from '@/@types/totalLogByGroup'

export async function CardInfoContainer() {
  const data = (await getDBData({
    uri: 'log/total-by-group',
    revalidateTimeInSeconds: 10,
  })) as DataTotalLogByGroupProps[]

  return (
    <article className="flex flex-col items-start justify-between gap-5 md:flex-row">
      <ChartCommands logData={data} />
      <AdminCard />
    </article>
  )
}
