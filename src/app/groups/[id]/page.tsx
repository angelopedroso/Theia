import { getDBData } from '@/api/getDBData'
import { EditGroupSettings } from '@/components/GroupPage/GroupForm/editGroupSettings'
import { GroupUserTable } from '@/components/GroupPage/GroupUserTable'
import { Header } from '@/components/ui/header'
import { ModalProvider } from '@/contexts/modalContext'
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
    revalidateTimeInSeconds: 60 * 2,
  })

  return (
    <ModalProvider>
      <div className="flex h-full flex-col p-8">
        <div className="mb-6 border-b border-slate-600 pb-6">
          <Header title={data.name} className="mb-0" />
        </div>
        <main className="relative flex flex-col items-end gap-8">
          <EditGroupSettings data={data} />
          <GroupUserTable data={data} />
        </main>
      </div>
    </ModalProvider>
  )
}
