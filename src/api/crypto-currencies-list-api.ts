import { createApi } from '@reduxjs/toolkit/query/react'
import { ICryptoCurrency } from 'src/types'
import { getImageUrl, rtkBaseQuery } from 'src/utils'

/**
 * The data type representing the returned data from the API.
 */
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

/**
 * Method for converting data from API to object
 *
 * @param {ICryptoCurrenciesListResponse} response - Data from the request API
 */
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

/**
 * Gets a list of cryptocurrencies. To get a list of cryptocurrencies,
 * the `CoinCap API` is used.
 */
export const cryptoCurrenciesListApi = createApi({
  reducerPath: 'cryptoCurrenciesListApi',
  baseQuery: rtkBaseQuery(),
  endpoints: (builder) => ({
    /**
     * A hook to get a list of cryptocurrencies.
     *
     * @param {string[] | undefined} ids - An optional parameter to get an
     * array of only those coins that are specified in the array.
     * @param {number | undefined} start - Optional parameter for the beginning
     * of the API list.
     * @param {number | undefined} limit - An optional parameter that specifies
     * the number of data returned at a time.
     */
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
