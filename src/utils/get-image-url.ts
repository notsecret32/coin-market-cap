export const getImageUrl = (
  id: number | undefined,
  size: 16 | 32 | 64 | 128 | 200 = 32,
) =>
  `https://s2.coinmarketcap.com/static/img/coins/${size}x${size}/${id ?? 0}.png`
