import { DataTotalSummaryProps } from '@/@types/totalSummary'
import { getDBData } from '@/api/getDBData'
import { CardInfoContainer } from '@/components/CardAdminDataInfoDashboard'
import { GroupTable } from '@/components/DataTable'
import { Summary } from '@/components/Summary'

export default async function Home() {
  const data = (await getDBData({
    uri: 'summary',
    revalidateTimeInSeconds: 10,
  })) as DataTotalSummaryProps

  return (
    <>
      <header className="h-44 w-full bg-indigo-600 p-8 pb-28">
        <h2 className="text-sm font-bold leading-normal text-zinc-50 xxs:text-lg sm:text-2xl">
          Summary
        </h2>
      </header>
      <main className="space-y-4 p-4 sm:space-y-7 sm:p-8">
        <Summary data={data} />
        <GroupTable />
        <CardInfoContainer />
      </main>
    </>
  )
}
