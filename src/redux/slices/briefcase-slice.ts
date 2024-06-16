import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BRIEFCASE_LOCAL_STORAGE_KEY } from 'src/constants/local-storage-keys'
import { emitLocalStorageChangeEvent } from 'src/hooks/use-local-storage'
import { IBuyCryptoCurrency } from 'src/types'

export interface IBriefcaseSlice {
  coins: IBuyCryptoCurrency[]
  amount: number
}

// Получаем данные из localStorage
function loadState(key: string) {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Не удалось загрузить состояние:', err)
    return undefined
  }
}

const savedState = loadState(BRIEFCASE_LOCAL_STORAGE_KEY)

const initialState: IBriefcaseSlice = {
  coins: savedState?.coins || [],
  amount: savedState?.amount || 0,
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
      const coinIndex = state.coins.findIndex(
        (coin) => coin.id === action.payload.coin.id,
      )

      if (coinIndex !== -1) {
        state.coins[coinIndex].amount += action.payload.coin.amount
        state.coins[coinIndex].totalPrice =
          state.coins[coinIndex].amount * state.coins[coinIndex].price
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

      emitLocalStorageChangeEvent()
    },
  },
})

export const { addCryptoToBriefcase } = briefcaseSlice.actions
