import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ISearchCoinSlice {
  name: string
}

const initialState: ISearchCoinSlice = {
  name: '',
}

export const searchCoinSlice = createSlice({
  name: 'searchCoinSlice',
  initialState,
  reducers: {
    updateSearchCoinName: (
      state,
      action: PayloadAction<{ coinName: string }>,
    ) => {
      state.name = action.payload.coinName
    },
  },
})

export const { updateSearchCoinName } = searchCoinSlice.actions
