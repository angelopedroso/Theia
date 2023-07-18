import { GroupTableProps } from '@/components/DataTable/components'
import { API_HOST_URL } from '@/utils/envs'

export async function getGroups() {
  const res = await fetch(`${API_HOST_URL}/groups`, {
    next: {
      revalidate: 60 * 5,
    },
  })

  const data = await res.json()

  return data as GroupTableProps[]
}
