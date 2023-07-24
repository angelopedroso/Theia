import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export function ChartLogLoading() {
  return (
    <div className="flex min-h-3xl w-full flex-col items-start rounded-lg bg-slate-850 p-4 shadow-md 2xl:w-[67.6875rem]">
      <Skeleton className="mb-4 h-6 w-36" />
      <div className="w-full overflow-x-scroll scrollbar-thin scrollbar-track-slate-850 scrollbar-thumb-slate-600 scrollbar-corner-slate-850 scrollbar-thumb-rounded hover:scrollbar-thumb-slate-500 lg:overflow-x-hidden">
        <div className="w-full">
          <Skeleton className="h-[28.5625rem] w-full 2xl:w-[65.6875rem]" />
        </div>
      </div>
    </div>
  )
}
