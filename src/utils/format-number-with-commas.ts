export const formatNumberWithCommas = (value?: number): string | undefined => {
  if (value === undefined) return '?'
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
