import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IHomePageSlice {
  start: number
  limits: number
  isStartReached: boolean
  isEndReached: boolean
}

const initialState: IHomePageSlice = {
  start: 1,
  limits: 100,
  isStartReached: true,
  isEndReached: false,
}

export const homePageSlice = createSlice({
  name: 'homePageSlice',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.start += state.limits

      if (state.start > 1) {
        state.isStartReached = false
      }
    },
    previousPage: (state) => {
      if (state.start - state.limits <= 1) {
        state.start = 1
        state.isStartReached = true
        return
      }

      state.start -= state.limits
    },
    setEndReached: (
      state,
      action: PayloadAction<{ isEndReacher: boolean }>,
    ) => {
      state.isEndReached = action.payload.isEndReacher
    },
  },
})

export const { nextPage, previousPage, setEndReached } = homePageSlice.actions
