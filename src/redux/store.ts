import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { coinsListApi } from 'src/api/coinsListApi'
import { keyInfoApi } from 'src/api/keyInfoApi'
import { usersApi } from 'src/api/usersApi'
import { counterSlice } from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [keyInfoApi.reducerPath]: keyInfoApi.reducer,
    [coinsListApi.reducerPath]: coinsListApi.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(keyInfoApi.middleware)
      .concat(coinsListApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
