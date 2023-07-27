import { API_HOST_URL } from '@/utils/envs'

interface FetchProps {
  revalidateTimeInSeconds?: number
  uri: string
}

export async function getDBData({
  uri = '',
  revalidateTimeInSeconds = 60,
}: FetchProps) {
  const res = await fetch(`${API_HOST_URL}/${uri}`, {
    next: {
      revalidate: revalidateTimeInSeconds,
    },
  })

  const data = await res.json()

  return data
}
