interface Participant {
  id: string
  p_id: string
  image_url?: string
  name: string
}

type GroupsProps = {
  id: string
  name: string
  image_url?: string
  g_id: string
  bem_vindo: boolean
  anti_link: boolean
  anti_porn: boolean
  anti_profane: boolean
  one_group: boolean
  auto_sticker: boolean
  auto_invite_link: boolean
  anti_trava_id: string
  anti_trava: {
    status: boolean
    max_characters: number
  }
  black_list: Participant[]
  participants: Participant[]
}
