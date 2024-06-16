import { createApi } from '@reduxjs/toolkit/query/react'
import { TimeIntervalEnum } from 'src/enums'
import { ICryptoCurrencyChart, ICryptoCurrencyDetails } from 'src/types'
import { rtkBaseQuery } from 'src/utils'

/**
 * The data type representing the returned data from the API.
 */
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

/**
 * Method for converting data from API to object
 *
 * @param {ICryptoCurrenciesListResponse} response - Data from the request API
 */
const transformCryptoCurrencyDetailsResponse = (
  response: ICryptoCurrencyDetailsResponse,
): ICryptoCurrencyDetails => ({
  id: response.data.id,
  name: response.data.name,
  symbol: response.data.symbol,
  rank: +response.data.rank,
  price: +response.data.priceUsd,
  supply: +response.data.supply,
  maxSupply: +response.data.maxSupply,
  capitalization: +response.data.marketCapUsd,
  changePercent24Hr: +response.data.changePercent24Hr,
})

/**
 * The data type representing the returned data from the API.
 */
interface ICryptoCurrencyChartPointResponse {
  priceUsd: string
  time: number
}

/**
 * The data type representing the returned data from the API.
 */
interface ICryptoCurrencyChartResponse {
  data: ICryptoCurrencyChartPointResponse[]
}

/**
 * Method for converting data from API to object
 *
 * @param {ICryptoCurrenciesListResponse} response - Data from the request API
 */
const transformCryptoCurrencyChartResponse = (
  response: ICryptoCurrencyChartResponse,
): ICryptoCurrencyChart => ({
  data: response.data.map((point) => ({
    price: parseFloat(point.priceUsd),
    date: new Date(point.time).toLocaleDateString(),
    time: new Date(point.time).toLocaleTimeString(),
  })),
})

/**
 * Receives detailed data about a specific coin, as well as a price change
 * chart.
 */
export const cryptoCurrencyDetailsApi = createApi({
  reducerPath: 'cryptoCurrencyDetailsApi',
  baseQuery: rtkBaseQuery(),
  endpoints: (builder) => ({
    /**
     * Returns detailed data for a specific cryptocurrency.
     *
     * @param {string} id - The ID of the cryptocurrency to get the data for.
     */
    getCryptoCurrencyDetails: builder.query<
      ICryptoCurrencyDetails,
      { id: string }
    >({
      query: ({ id }) => `v2/assets/${id}`,
      transformResponse: (response: ICryptoCurrencyDetailsResponse) =>
        transformCryptoCurrencyDetailsResponse(response),
    }),
    /**
     * Returns a price chart for a specific cryptocurrency.
     *
     * @param {string} id - The ID of the cryptocurrency to get the data for.
     * @param {TimeIntervalEnum} interval - The interval for which data on
     * price changes should be received.
     */
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
