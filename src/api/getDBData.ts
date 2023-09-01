interface FetchProps {
  revalidateTimeInSeconds?: number
  uri: string
}

export async function getDBData({
  uri = '',
  revalidateTimeInSeconds = 60,
}: FetchProps) {
  try {
    const res = await fetch(`${process.env.API_HOST_URL}/${uri}`, {
      next: {
        revalidate: revalidateTimeInSeconds,
      },
    })

    const data = await res.json()

    return data
  } catch (error) {
    return null
  }
}
