export function formatNumberToThousandSeparator(value: number) {
  return new Intl.NumberFormat().format(value)
}

export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }

  return new Intl.DateTimeFormat('default', options).format(new Date(date))
}
