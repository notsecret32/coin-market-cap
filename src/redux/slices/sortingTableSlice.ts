import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortableTableColumn, SortDirection } from 'src/types'

export interface ISortingTableSlice {
  direction: SortDirection
  column: SortableTableColumn
}

const initialState: ISortingTableSlice = {
  direction: 'desc',
  column: 'capitalization',
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
