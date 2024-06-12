import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const rtkBaseQuery = () =>
  fetchBaseQuery({
    baseUrl: 'https://api.coincap.io',
    headers: {
      'Accept-Encoding': 'gzip',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${process.env.REACT_APP_COIN_CAP_API_KEY}`,
    },
  })
