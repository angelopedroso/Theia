import React from 'react'
import { AdminCard, ChartCommands } from './components'
import { getDBData } from '@/api/getDBData'

export interface DataProps {
  _count: { command: number }
  groupId: string
  chat_name: string
}

export async function CardInfoContainer() {
  const data = (await getDBData({
    uri: 'log/total-by-group',
    revalidateTimeInSeconds: 10,
  })) as DataProps[]

  return (
    <article className="flex flex-col items-start justify-between gap-5 md:flex-row">
      <ChartCommands logData={data} />
      <AdminCard />
    </article>
  )
}
