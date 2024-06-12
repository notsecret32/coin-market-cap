import { createApi } from '@reduxjs/toolkit/query/react'
import { TimeIntervalEnum } from 'src/enums'
import { ICryptoCurrencyChart, ICryptoCurrencyDetails } from 'src/types'
import { getImageUrl, rtkBaseQuery } from 'src/utils'

interface ICryptoCurrencyDetailsResponse {
  data: {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
  }
}

const transformCryptoCurrencyDetailsResponse = (
  response: ICryptoCurrencyDetailsResponse,
): ICryptoCurrencyDetails => ({
  id: response.data.id,
  imageUrl: getImageUrl(response.data.symbol),
  name: response.data.name,
  symbol: response.data.symbol,
  rank: +response.data.rank,
  price: +response.data.priceUsd,
  supply: +response.data.supply,
  maxSupply: +response.data.maxSupply,
  capitalization: +response.data.marketCapUsd,
  changePercent24Hr: +response.data.changePercent24Hr,
})

interface ICryptoCurrencyChartPointResponse {
  priceUsd: string
  time: number
}

interface ICryptoCurrencyChartResponse {
  data: ICryptoCurrencyChartPointResponse[]
}

const transformCryptoCurrencyChartResponse = (
  response: ICryptoCurrencyChartResponse,
): ICryptoCurrencyChart => ({
  data: response.data.map((point) => ({
    price: parseFloat(point.priceUsd),
    time: point.time,
  })),
})

export const cryptoCurrencyDetailsApi = createApi({
  reducerPath: 'cryptoCurrencyDetailsApi',
  baseQuery: rtkBaseQuery(),
  endpoints: (builder) => ({
    getCryptoCurrencyDetails: builder.query<
      ICryptoCurrencyDetails,
      { id: string }
    >({
      query: ({ id }) => `v2/assets/${id}`,
      transformResponse: (response: ICryptoCurrencyDetailsResponse) =>
        transformCryptoCurrencyDetailsResponse(response),
    }),
    getCryptoCurrencyChart: builder.query<
      ICryptoCurrencyChart,
      { id: string; interval: TimeIntervalEnum }
    >({
      query: ({ id, interval }) =>
        `v2/assets/${id}/history?interval=${interval}`,
      transformResponse: (response: ICryptoCurrencyChartResponse) =>
        transformCryptoCurrencyChartResponse(response),
    }),
  }),
})

export const {
  useGetCryptoCurrencyChartQuery,
  useGetCryptoCurrencyDetailsQuery,
} = cryptoCurrencyDetailsApi
