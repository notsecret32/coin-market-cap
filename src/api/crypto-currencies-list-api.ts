import { createApi } from '@reduxjs/toolkit/query/react'
import { ICryptoCurrency } from 'src/types'
import { getImageUrl, rtkBaseQuery } from 'src/utils'

interface ICryptoCurrenciesListResponse {
  data: [
    {
      id: string
      name: string
      symbol: string
      priceUsd: string
      marketCapUsd: string
      changePercent24Hr: string
    },
  ]
}

const transformResponse = (
  response: ICryptoCurrenciesListResponse,
): ICryptoCurrency[] =>
  response.data.map((currency) => ({
    id: currency.id,
    imageUrl: getImageUrl(currency.symbol),
    name: currency.name,
    symbol: currency.symbol,
    price: +currency.priceUsd,
    capitalization: +currency.marketCapUsd,
    changePercent24Hr: +currency.changePercent24Hr,
  }))

export const cryptoCurrenciesListApi = createApi({
  reducerPath: 'cryptoCurrenciesListApi',
  baseQuery: rtkBaseQuery(),
  endpoints: (builder) => ({
    getCryptoCurrenciesList: builder.query<
      ICryptoCurrency[],
      { ids?: string[]; start?: number; limit?: number }
    >({
      query: ({ ids, start, limit }) => {
        const endpoint = '/v2/assets'

        let hasParams = false
        let result = endpoint

        if (ids !== undefined) {
          result += `${hasParams ? '&' : '?'}ids=${ids.join(',')}`
          hasParams = true
        }

        if (start !== undefined) {
          result += `${hasParams ? '&' : '?'}start=${start}`
          hasParams = true
        }

        if (limit !== undefined) {
          result += `${hasParams ? '&' : '?'}limit=${limit}`
          hasParams = true
        }

        return result
      },
      transformResponse,
    }),
  }),
})

export const { useGetCryptoCurrenciesListQuery } = cryptoCurrenciesListApi
