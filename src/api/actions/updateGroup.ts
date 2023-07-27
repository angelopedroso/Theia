'use server'

import { updateFormProps } from '@/components/EditGroupCards/groupSettingsForm'
import { api } from '@/lib/axios'

export type GroupRequestData = Omit<updateFormProps, 'group_name'> & {
  g_id: string
  group_name?: string
  id: string
  avatar_image?: string
  blackList: Participant[]
}

export async function updateGroup(data: GroupRequestData) {
  await api.put(`/groups/${data.id}`, data)
}
