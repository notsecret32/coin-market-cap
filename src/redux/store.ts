import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { coinsListApi } from 'src/api/coinsListApi'
import { homePageSlice, sortingTableSlice } from './slices'

export const store = configureStore({
  reducer: {
    [coinsListApi.reducerPath]: coinsListApi.reducer,
    sortingTableSlice: sortingTableSlice.reducer,
    homePageSlice: homePageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsListApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
