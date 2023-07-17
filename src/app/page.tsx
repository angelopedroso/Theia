import { Summary } from '@/components/Summary'

export default function Home() {
  return (
    <>
      <header className="h-44 w-full bg-indigo-600 p-8 px-8 pb-28">
        <h1 className="font-main text-sm font-bold leading-normal text-zinc-50 xxs:text-lg sm:text-2xl">
          Summary
        </h1>
      </header>
      <Summary />
    </>
  )
}
