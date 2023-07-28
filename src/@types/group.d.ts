interface Participant {
  id: string
  p_id: string
  image_url: string | null
  name: string
}

type GroupsProps = {
  id: string
  group_info: {
    groupId: string
    name: string
    inviteCode: string
    image_url?: string
    isAdmin: boolean
  }
  g_id: string
  bem_vindo: boolean
  anti_link: boolean
  anti_porn: boolean
  one_group: boolean
  auto_sticker: boolean
  auto_invite_link: boolean
  anti_trava_id: string
  anti_trava: {
    status: boolean
    max_characters: number
  }
  blackList: Participant[]
  participants: Participant[]
}
