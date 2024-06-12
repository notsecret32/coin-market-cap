import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { coinDetailsApi } from 'src/api/coinDetailsApi'
import { coinsListApi } from 'src/api/coinsListApi'
import { homePageSlice, searchCoinSlice, sortingTableSlice } from './slices'

export const store = configureStore({
  reducer: {
    [coinsListApi.reducerPath]: coinsListApi.reducer,
    [coinDetailsApi.reducerPath]: coinDetailsApi.reducer,
    sortingTableSlice: sortingTableSlice.reducer,
    homePageSlice: homePageSlice.reducer,
    searchCoinSlice: searchCoinSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinsListApi.middleware)
      .concat(coinDetailsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
