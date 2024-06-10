import { IApiCoin, IApiError } from 'src/types'

export interface IApiTrendingCoins {
  data: IApiCoin[]
  status: IApiError
}
