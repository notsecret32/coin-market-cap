import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ISearchCoinSlice {
  coinName: string
}

const initialState: ISearchCoinSlice = {
  coinName: '',
}

export const searchCoinSlice = createSlice({
  name: 'searchCoinSlice',
  initialState,
  reducers: {
    updateSearchCoinName: (
      state,
      action: PayloadAction<{ coinName: string }>,
    ) => {
      state.coinName = action.payload.coinName
    },
  },
})

export const { updateSearchCoinName } = searchCoinSlice.actions
