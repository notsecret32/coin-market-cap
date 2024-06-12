export const formatShortNumber = (value?: number): string | undefined => {
  if (value === undefined) return '?'
  if (value < 1000) return value.toString()
  if (value < 1000000) return (value / 1000).toFixed(2) + 'K'
  if (value < 1000000000) return (value / 1000000).toFixed(2) + 'M'
  return (value / 1000000000).toFixed(2) + 'B'
}
