import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export function AdminLoading() {
  return (
    <div className="flex min-h-3xl w-full flex-col items-start rounded-lg bg-slate-850 p-4 shadow-md">
      <Skeleton className="mb-4 h-6 w-36" />
      <div className="w-full space-y-2 overflow-x-scroll scrollbar-thin scrollbar-track-slate-850 scrollbar-thumb-slate-600 scrollbar-corner-slate-850 scrollbar-thumb-rounded hover:scrollbar-thumb-slate-500 lg:overflow-x-hidden">
        <div className="flex h-12 w-full gap-6 xl:w-156 xl:justify-between xl:gap-0">
          <Skeleton className="w-36 rounded-md" />
          <Skeleton className="w-36 rounded-md" />
        </div>
        <div className="w-full xl:w-156">
          <div className="flex items-center gap-6 py-4 xl:w-156 xl:justify-between xl:gap-0">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-6 py-4 xl:w-156 xl:justify-between xl:gap-0">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-6 py-4 xl:w-156 xl:justify-between xl:gap-0">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-6 py-4 xl:w-156 xl:justify-between xl:gap-0">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-6 py-4 xl:w-156 xl:justify-between xl:gap-0">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full justify-end space-x-2 border-t border-slate-855 pt-4">
        <Skeleton className="h-9 w-20 rounded-md" />
        <Skeleton className="h-9 w-16 rounded-md" />
      </div>
    </div>
  )
}
