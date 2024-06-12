import { useGetCryptoCurrenciesListQuery } from 'src/api/crypto-currencies-list-api'
import { SortingTableEnum } from 'src/enums'
import { useAppSelector } from 'src/redux/store'

export const useCryptoCurrenciesList = () => {
  const { start } = useAppSelector((state) => state.homePageSlice)
  const { columnId, sortingType } = useAppSelector(
    (state) => state.sortingTableSlice,
  )
  const { coinName } = useAppSelector((state) => state.searchCoinSlice)

  const { data, error, isLoading, isError } = useGetCryptoCurrenciesListQuery({
    start,
  })

  const sortedAndFilteredData = data
    ?.filter((coin) => coin.name.toLowerCase().includes(coinName.toLowerCase()))
    .sort((a, b) => {
      switch (columnId) {
        case 2:
          return sortingType === SortingTableEnum.Ascending
            ? a.price - b.price
            : b.price - a.price
        case 3:
          return sortingType === SortingTableEnum.Ascending
            ? a.capitalization - b.capitalization
            : b.capitalization - a.capitalization
        case 4:
          return sortingType === SortingTableEnum.Ascending
            ? a.changePercent24Hr - b.changePercent24Hr
            : b.changePercent24Hr - a.changePercent24Hr
        default:
          return 0
      }
    })

  return {
    data,
    sortedAndFilteredData,
    error,
    isLoading,
    isError,
  }
}
