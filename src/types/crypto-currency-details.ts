export interface ICryptoCurrencyDetails {
  id: string
  name: string
  symbol: string
  rank: number
  price: number
  supply: number
  maxSupply: number | null
  capitalization: number
  changePercent24Hr: number
}
