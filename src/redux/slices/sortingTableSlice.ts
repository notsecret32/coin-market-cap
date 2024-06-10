import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortingTableEnum } from 'src/enums'

export interface ISortingTableSlice {
  sortingType: SortingTableEnum
  columnId: number
  columnName?: string
}

const initialState: ISortingTableSlice = {
  sortingType: SortingTableEnum.Ascending,
  columnId: 0,
}

export const sortingTableSlice = createSlice({
  name: 'sortingTableSlice',
  initialState,
  reducers: {
    setSortingColumn: (state, action: PayloadAction<ISortingTableSlice>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setSortingColumn } = sortingTableSlice.actions
