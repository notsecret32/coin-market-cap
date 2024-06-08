import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IUser {
  id: number
  name: string
  username: string
}

export const usersApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => '/users',
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
