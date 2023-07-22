'use client'

import { DataTotalLogByGroupProps } from '@/@types/totalLogByGroup'
import { LineChart } from './lineChart'

export interface ChartCommandsProps {
  logData: DataTotalLogByGroupProps[]
}

export function ChartCommands(props: ChartCommandsProps) {
  return (
    <section className="flex w-full max-w-full flex-1 flex-col items-start rounded-lg bg-slate-850 pb-4 shadow-md">
      <header>
        <h2 className="p-4 text-base leading-normal text-gray-100">
          Commands used by group
        </h2>
      </header>
      <main className="w-full flex-1 p-4">
        <LineChart data={props.logData} />
      </main>
    </section>
  )
}
