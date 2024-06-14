import { useAppSelector } from 'src/redux/store'
import { ICryptoCurrency, SortableTableColumn } from 'src/types'
import { useCryptoCurrenciesList } from './use-crypto-currencies-list'

export const useSortTableColumn = () => {
  const { data: coins } = useCryptoCurrenciesList()
  const { name } = useAppSelector((state) => state.searchCoinSlice)
  const { column, direction } = useAppSelector(
    (state) => state.sortingTableSlice,
  )

  const sort =
    (key: SortableTableColumn) => (a: ICryptoCurrency, b: ICryptoCurrency) =>
      direction === 'asc' ? a[key] - b[key] : b[key] - a[key]

  const result = coins
    ?.filter((coin) => coin.name.toLowerCase().includes(name.toLowerCase()))
    .sort(sort(column))

  return {
    direction,
    data: result,
  }
}
