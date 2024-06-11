import { createApi } from '@reduxjs/toolkit/query/react'
import { IApiCoinInfo, IApiCoinMarketInfo, IApiStatus } from 'src/types'
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
  }),
})

export const { useGetCoinInfoQuery, useGetCoinMarketInfoQuery } = coinDetailsApi
