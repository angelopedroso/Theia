import React from 'react'
import { Skeleton } from '../ui/skeleton'

export function GroupTableLoading() {
  return (
    <div className="flex min-h-3xl w-full flex-col items-start rounded-lg bg-slate-850 p-4 shadow-md">
      <Skeleton className="mb-4 h-6 w-36" />
      <div className="w-full space-y-2 overflow-x-scroll lg:overflow-x-hidden">
        <div className="flex h-12 w-[82.6875rem] justify-between lg:w-full">
          <Skeleton className="w-36 rounded-md" />
          <Skeleton className="w-36 rounded-md" />
          <Skeleton className="w-28 rounded-md" />
          <Skeleton className="w-36 rounded-md" />
          <Skeleton className="w-52 rounded-md" />
        </div>
        <div className="w-[82.6875rem] lg:w-full">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-9 w-52 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-9 w-52 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-9 w-52 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-9 w-52 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-44" />
            </div>
            <div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div>
              <Skeleton className="h-9 w-52 rounded-md" />
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
