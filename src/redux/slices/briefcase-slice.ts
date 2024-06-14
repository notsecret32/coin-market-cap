import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BRIEFCASE_LOCAL_STORAGE_KEY } from 'src/constants/local-storage-keys'
import { IBuyCryptoCurrency } from 'src/types'

export interface IBriefcaseSlice {
  coins: IBuyCryptoCurrency[]
  amount: number
}

const initialState: IBriefcaseSlice = {
  coins: [],
  amount: 0,
}

export const briefcaseSlice = createSlice({
  name: 'briefcaseSlice',
  initialState,
  reducers: {
    addCryptoToBriefcase: (
      state,
      action: PayloadAction<{
        coin: IBuyCryptoCurrency
      }>,
    ) => {
      const existingCoin = state.coins.find(
        (coin) => coin.id === action.payload.coin.id,
      )
      if (existingCoin) {
        existingCoin.amount += action.payload.coin.amount
        existingCoin.totalPrice = existingCoin.amount * existingCoin.price
      } else {
        state.coins.push(action.payload.coin)
      }

      state.amount = state.coins.reduce(
        (prev, curr) => prev + curr.totalPrice,
        0,
      )

      localStorage.setItem(
        BRIEFCASE_LOCAL_STORAGE_KEY,
        JSON.stringify({
          coins: state.coins,
          amount: state.amount,
        }),
      )
    },
  },
})

export const { addCryptoToBriefcase } = briefcaseSlice.actions
