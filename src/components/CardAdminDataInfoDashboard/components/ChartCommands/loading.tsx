import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export function ChartLogLoading() {
  return (
    <div className="flex min-h-3xl w-full flex-col items-start rounded-lg bg-slate-850 p-4 shadow-md xl:w-[67.6875rem]">
      <Skeleton className="mb-4 h-6 w-36" />
      <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
        <div className="w-full">
          <Skeleton className="h-[28.5625rem] w-[65.6875rem]" />
        </div>
      </div>
    </div>
  )
}
