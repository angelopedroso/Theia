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

  return <h1 className="text-white">{groupId}</h1>
}
