import { createApi } from '@reduxjs/toolkit/query/react'
import { IApiCoin, IApiResponse, IApiStatus } from 'src/types'
import { getApiStatusResponse, trkBaseQuery } from 'src/utils'

const transformResponse = (
  response: any,
): IApiResponse<IApiCoin[], IApiStatus> => {
  const transformedData: IApiCoin[] = response.data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    slug: coin.slug,
    price: coin.quote.USD.price,
    capitalization: coin.quote.USD.market_cap,
    percentChange24h: coin.quote.USD.percent_change_24h,
  }))

  const transformedStatus: IApiStatus = getApiStatusResponse(response)

  return { data: transformedData, status: transformedStatus }
}

export const coinsListApi = createApi({
  reducerPath: 'coinsListApi',
  baseQuery: trkBaseQuery(),
  endpoints: (builder) => ({
    getCoinsList: builder.query<
      IApiResponse<IApiCoin[], IApiStatus>,
      { start?: number }
    >({
      query: ({ start }) =>
        `/v1/cryptocurrency/listings/latest?price_min=0.01${start && `&start=${start}`}`,
      transformResponse,
    }),
  }),
})

export const { useGetCoinsListQuery } = coinsListApi
