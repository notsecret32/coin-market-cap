import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { cryptoCurrenciesListApi, cryptoCurrencyDetailsApi } from 'src/api'
import {
  briefcaseSlice,
  homePageSlice,
  searchCoinSlice,
  sortingTableSlice,
  timeIntervalSlice,
} from './slices'

export const store = configureStore({
  reducer: {
    // API
    [cryptoCurrenciesListApi.reducerPath]: cryptoCurrenciesListApi.reducer,
    [cryptoCurrencyDetailsApi.reducerPath]: cryptoCurrencyDetailsApi.reducer,

    // Local
    sortingTableSlice: sortingTableSlice.reducer,
    homePageSlice: homePageSlice.reducer,
    searchCoinSlice: searchCoinSlice.reducer,
    timeIntervalSlice: timeIntervalSlice.reducer,
    briefcaseSlice: briefcaseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoCurrenciesListApi.middleware)
      .concat(cryptoCurrencyDetailsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
