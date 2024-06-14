export const getImageUrl = (symbol: string | undefined) =>
  `https://assets.coincap.io/assets/icons/${symbol ? symbol.toLowerCase() : 'btc'}@2x.png`
