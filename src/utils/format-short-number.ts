export const formatShortNumber = (value?: number): string => {
  if (!value || value === undefined) return '?'
  if (value < 1000) return value.toFixed(2)
  if (value < 1000000) return (value / 1000).toFixed(2) + 'K'
  if (value < 1000000000) return (value / 1000000).toFixed(2) + 'M'
  return (value / 1000000000).toFixed(2) + 'B'
}
