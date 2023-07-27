import { getDBData } from '@/api/getDBData'
import { EditGroupSettings } from '@/components/EditGroupCards/editGroupSettings'
import { Header } from '@/components/ui/header'
import React from 'react'
export interface GroupPageIdProps {
  searchParams: { id: string; name: string }
}

export async function generateMetadata({ searchParams }: GroupPageIdProps) {
  return {
    title: searchParams.name,
  }
}

export default async function GroupPageId({ searchParams }: GroupPageIdProps) {
  const groupId = searchParams.id

  const data: GroupsProps = await getDBData({
    uri: `groups/${groupId}`,
  })

  return (
    <div className="flex h-full flex-col p-8">
      <div className="mb-6 border-b border-slate-600 pb-6">
        <Header title={data.group_info.name} className="mb-0" />
      </div>
      <main className="flex justify-end">
        <EditGroupSettings data={data} />
      </main>
    </div>
  )
}
