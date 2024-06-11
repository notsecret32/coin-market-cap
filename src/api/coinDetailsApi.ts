import { createApi } from '@reduxjs/toolkit/query/react'
import {
  IApiCoinGraphData,
  IApiCoinInfo,
  IApiCoinMarketInfo,
  IApiStatus,
} from 'src/types'
import { IApiResponse } from 'src/types/api-response'
import { getApiStatusResponse, trkBaseQuery } from 'src/utils'

interface ITransformProps {
  id: number
  response: any
}

const transformCoinInfo = ({
  id,
  response,
}: ITransformProps): IApiResponse<IApiCoinInfo, IApiStatus> => {
  const data: IApiCoinInfo = {
    name: response.data[id].name,
    symbol: response.data[id].symbol,
    imageUrl: response.data[id].logo,
  }

  const status: IApiStatus = getApiStatusResponse(response)

  return {
    data,
    status,
  }
}

const transformCoinMarketInfo = ({
  id,
  response,
}: ITransformProps): IApiResponse<IApiCoinMarketInfo, IApiStatus> => {
  const data: IApiCoinMarketInfo = {
    totalSupply: response.data[id].total_supply,
    maxSupply: response.data[id].max_supply,
    rank: response.data[id].cmc_rank,
    capitalization: response.data[id].quote.USD.market_cap,
    price: response.data[id].quote.USD.price,
  }

  const status: IApiStatus = getApiStatusResponse(response)

  return { data, status }
}

const transformCoinGraphData = (
  response: any,
): IApiResponse<IApiCoinGraphData, IApiStatus> => {
  const data: IApiCoinGraphData = {
    id: response.data.id,
    name: response.data.name,
    symbol: response.data.symbol,
    graph: response.data.quotes.map((graph: any) => ({
      time: {
        open: graph.time_open.toISOString(),
        close: graph.time_close.toISOString(),
        high: graph.time_high.toISOString(),
        low: graph.time_low.toISOString(),
      },
      price: {
        open: graph.quote.USD.open,
        close: graph.quote.USD.close,
        high: graph.quote.USD.high,
        low: graph.quote.USD.low,
        volume: graph.quote.USD.volume,
        capitalization: graph.quote.USD.capitalization,
        timestamp: graph.quote.USD.timestamp.toISOString(),
      },
    })),
  }

  const status: IApiStatus = getApiStatusResponse(response)

  return { data, status }
}

export const coinDetailsApi = createApi({
  reducerPath: 'coinDetailsApi',
  baseQuery: trkBaseQuery(),
  endpoints: (builder) => ({
    getCoinInfo: builder.query<
      IApiResponse<IApiCoinInfo, IApiStatus>,
      { id: number }
    >({
      query: ({ id }) => `/v2/cryptocurrency/info?id=${id}`,
      transformResponse: (response, _, { id }) =>
        transformCoinInfo({ id, response }),
    }),
    getCoinMarketInfo: builder.query<
      IApiResponse<IApiCoinMarketInfo, IApiStatus>,
      { id: number }
    >({
      query: ({ id }) => `/v2/cryptocurrency/quotes/latest?id=${id}`,
      transformResponse: (response, _, { id }) =>
        transformCoinMarketInfo({ id, response }),
    }),
    getCoinGraphData: builder.query<
      IApiResponse<IApiCoinGraphData, IApiStatus>,
      { id: number }
    >({
      query: ({ id }) => `/v2/cryptocurrency/ohlcv/historical?id=${id}`,
      transformResponse: (response) => transformCoinGraphData(response),
    }),
  }),
})

export const {
  useGetCoinInfoQuery,
  useGetCoinMarketInfoQuery,
  useGetCoinGraphDataQuery,
} = coinDetailsApi
