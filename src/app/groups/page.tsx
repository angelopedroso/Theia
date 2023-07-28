import { getDBData } from '@/api/getDBData'
import { CardGroupListCarousel } from '@/components/GroupCard'

import { Header } from '@/components/ui/header'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Active groups',
  description: 'Theia actived groups',
}

export default async function Groups() {
  const data: GroupsProps[] = await getDBData({
    uri: 'groups',
    revalidateTimeInSeconds: 60 * 5,
  })

  return (
    <div className="flex h-full flex-col py-8 pl-8 md:p-8">
      <Header title="Groups" subtitle="List of all active groups" />
      <main className="flex h-full items-center justify-center sm:px-8 md:px-16">
        <CardGroupListCarousel data={data} />
      </main>
    </div>
  )
}
