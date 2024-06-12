import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TimeIntervalEnum } from 'src/enums'

export interface ITimeIntervalSlice {
  interval: TimeIntervalEnum
}

const initialState: ITimeIntervalSlice = {
  interval: TimeIntervalEnum.m30,
}

export const timeIntervalSlice = createSlice({
  name: 'timeIntervalSlice',
  initialState,
  reducers: {
    updateInterval: (
      state,
      action: PayloadAction<{ interval: TimeIntervalEnum }>,
    ) => {
      state.interval = action.payload.interval
    },
  },
})
