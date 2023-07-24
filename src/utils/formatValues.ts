export function formatNumberToThousandSeparator(value: number) {
  return new Intl.NumberFormat().format(value)
}

export function formatDate(date: string) {
  const currentDate = new Date(date)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  const isToday = currentDate.toDateString() === today.toDateString()
  const isYesterday = currentDate.toDateString() === yesterday.toDateString()

  if (isToday || isYesterday) {
    const hours = String(currentDate.getHours()).padStart(2, '0')
    const minutes = String(currentDate.getMinutes()).padStart(2, '0')

    return `${isToday ? 'Today' : 'Yesterday'}, ${hours}:${minutes}`
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }

  return new Intl.DateTimeFormat('en-US', options).format(currentDate)
}
