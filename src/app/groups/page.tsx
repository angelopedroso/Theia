import { getDBData } from '@/api/getDBData'
import { CardGroupsPage } from '@/components/GroupCard/cardGroupsPage'

import { Header } from '@/components/ui/header'
import React from 'react'

export default async function Groups() {
  const data: GroupsProps[] = await getDBData({
    uri: 'groups',
    revalidateTimeInSeconds: 60 * 5,
  })

  return (
    <div className="flex h-full flex-col p-8">
      <Header title="Groups" subtitle="List of all active groups" />
      <main className="flex h-full items-start px-16">
        <div className="grid w-full grid-cols-2 place-items-center gap-8 lg:grid-cols-3">
          {data.map((group) => {
            return <CardGroupsPage key={group.id} data={group} />
          })}
        </div>
      </main>
    </div>
  )
}
