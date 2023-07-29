'use client'

import { Header, Skeleton } from '@/components/ui'
import React from 'react'

export default function Loading() {
  return (
    <div className="flex h-full flex-col py-8 pl-8 md:p-8">
      <Header title="Groups" subtitle="List of all active groups" />
      <main className="flex h-full items-center justify-center sm:px-8 md:px-16">
        <div className="flex items-center gap-8 overflow-hidden py-8 pl-4 md:p-8">
          <Skeleton className="h-[29.375rem] min-w-[29.375rem]" />
          <Skeleton className="h-[29.375rem] min-w-[29.375rem]" />
          <Skeleton className="h-[29.375rem] min-w-[29.375rem]" />
        </div>
      </main>
    </div>
  )
}
