import React, { Suspense } from 'react'
import { AdminCard, ChartCommands } from './components'
import { AdminLoading } from './components/AdminCard/loading'
import { ChartLogLoading } from './components/ChartCommands/loading'

export function CardInfoContainer() {
  return (
    <article className="flex flex-col items-start justify-between gap-5 md:flex-row">
      <Suspense fallback={<ChartLogLoading />}>
        <ChartCommands />
      </Suspense>
      <Suspense fallback={<AdminLoading />}>
        <AdminCard />
      </Suspense>
    </article>
  )
}
