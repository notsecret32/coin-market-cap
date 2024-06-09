import { createApi } from '@reduxjs/toolkit/query/react'
import { IApiCoin, IApiError, IApiTrendingCoins } from 'src/types'
import { trkBaseQuery } from 'src/utils'

const transformResponse = (response: any): IApiTrendingCoins => {
  const transformedData: IApiCoin[] = response.data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    slug: coin.slug,
    price: coin.quote.USD.price,
    percentChange24h: coin.quote.USD.percent_change_24h,
  }))

  const transformedStatus: IApiError = {
    errorCore: response.status.error_code,
    errorMessage: response.status.error_message,
    elapsed: response.status.elapsed,
    creditCount: response.status.credit_count,
    notice: response.status.notice || '',
  }

  return { data: transformedData, status: transformedStatus }
}

export const coinsListApi = createApi({
  reducerPath: 'popularCoinsListApi',
  baseQuery: trkBaseQuery(),
  endpoints: (builder) => ({
    getPopularCoinsList: builder.query<IApiTrendingCoins, void>({
      query: () => '/v1/cryptocurrency/listings/latest',
      transformResponse,
    }),
  }),
})

export const { useGetPopularCoinsListQuery } = coinsListApi
