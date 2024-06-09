import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IError } from 'src/types/error'

export const keyInfoApi = createApi({
  reducerPath: 'keyInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json')
      headers.set('X-CMC_PRO_API_KEY', process.env.REACT_APP_CMC_API_KEY!)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getKeyInfoStatus: builder.query<IError, void>({
      query: () => '/v1/key/info',
    }),
  }),
})

export const { useGetKeyInfoStatusQuery } = keyInfoApi
