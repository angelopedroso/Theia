'use server'

import { updateFormProps } from '@/components/GroupPage/GroupForm/groupSettingsForm'
import { BotFormularyProps } from '@/components/SideMenu/components/botFormulary'
import { api } from '@/lib/axios'

export type GroupRequestData = Omit<updateFormProps, 'group_name'> & {
  g_id: string
  group_name?: string
  id: string
  avatar_image?: string
  blackList: Participant[]
}

export type RemoveParticipantProps = {
  users: string[]
  group: string
}

export async function updateGroup(data: GroupRequestData) {
  await api.put(`/groups/${data.id}`, data)
}

export async function removeParticipant(data: RemoveParticipantProps) {
  await api({
    url: '/users/remove-participants',
    method: 'get',
    data,
  })
}

export async function updateBot(data: BotFormularyProps) {
  await api.put('/bot', data)
}
