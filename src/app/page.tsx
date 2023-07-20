import { CardInfoContainer } from '@/components/CardAdminDataInfoDashboard'
import { GroupTable } from '@/components/DataTable'
import { Summary } from '@/components/Summary'

export default function Home() {
  return (
    <>
      <header className="h-44 w-full bg-indigo-600 p-8 px-8 pb-28">
        <h2 className="text-sm font-bold leading-normal text-zinc-50 xxs:text-lg sm:text-2xl">
          Summary
        </h2>
      </header>
      <main className="space-y-7 p-8">
        <Summary />
        <GroupTable />
        <CardInfoContainer />
      </main>
    </>
  )
}
