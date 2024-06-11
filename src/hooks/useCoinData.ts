import { useGetCoinsListQuery } from 'src/api/coinsListApi'
import { SortingTableEnum } from 'src/enums'
import { useAppSelector } from 'src/redux/store'

export const useCoinData = () => {
  const { start } = useAppSelector((state) => state.homePageSlice)
  const { columnId, sortingType } = useAppSelector(
    (state) => state.sortingTableSlice,
  )
  const { coinName } = useAppSelector((state) => state.searchCoinSlice)

  const { data, error, isLoading, isError } = useGetCoinsListQuery({ start })

  const sortedAndFilteredData = data?.data
    ?.filter((coin) => coin.name.toLowerCase().includes(coinName.toLowerCase()))
    .sort((a, b) => {
      switch (columnId) {
        case 1:
          return sortingType === SortingTableEnum.Ascending
            ? a.id - b.id
            : b.id - a.id
        case 3:
          return sortingType === SortingTableEnum.Ascending
            ? a.price - b.price
            : b.price - a.price
        case 4:
          return sortingType === SortingTableEnum.Ascending
            ? a.capitalization - b.capitalization
            : b.capitalization - a.capitalization
        case 5:
          return sortingType === SortingTableEnum.Ascending
            ? a.percentChange24h - b.percentChange24h
            : b.percentChange24h - a.percentChange24h
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
