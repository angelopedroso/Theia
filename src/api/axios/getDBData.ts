import { API_HOST_URL } from '@/utils/envs'

interface FetchProps {
  revalidateTimeInSeconds?: number
  uri: string
}

export async function getDBData(props: FetchProps) {
  const res = await fetch(`${API_HOST_URL}/${props.uri}`, {
    next: {
      revalidate: props.revalidateTimeInSeconds,
    },
  })

  const data = await res.json()

  return data
}
