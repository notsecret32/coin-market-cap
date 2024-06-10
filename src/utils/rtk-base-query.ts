import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const trkBaseQuery = () =>
  fetchBaseQuery({
    baseUrl:
      'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json')
      headers.set('X-CMC_PRO_API_KEY', process.env.REACT_APP_CMC_API_KEY!)
      return headers
    },
  })
