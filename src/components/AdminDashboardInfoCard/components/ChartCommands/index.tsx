import { DataTotalLogByGroupProps } from '@/@types/totalLogByGroup'
import { getDBData } from '@/api/getDBData'
import { LineChart } from './lineChart'

export async function ChartCommands() {
  const data = (await getDBData({
    uri: 'log/total-by-group',
    revalidateTimeInSeconds: 10,
  })) as DataTotalLogByGroupProps[]

  return (
    <section className="flex w-full max-w-full flex-1 flex-col items-start rounded-lg bg-slate-850 pb-4 shadow-md">
      <header className="w-full border-b border-slate-855">
        <h2 className="p-4 text-base leading-normal text-gray-100">
          Commands used by group
        </h2>
      </header>
      <main className="w-full flex-1 p-4">
        <LineChart data={data} />
      </main>
    </section>
  )
}
