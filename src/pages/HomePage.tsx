import { useGetCoinsListQuery } from 'src/api/coinsListApi'
import { CoinsTable } from 'src/components'
import { SortingTableEnum } from 'src/enums'
import { useAppSelector } from 'src/redux/store'

export const HomePage = () => {
  const { data, error, isLoading, isError } = useGetCoinsListQuery()
  const { columnId, sortingType } = useAppSelector(
    (state) => state.sortingTableSlice,
  )

  if (isError) {
    console.log(error)
  }

  const sortedData = data?.data?.slice().sort((a, b) => {
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

  return (
    <main>
      <div className="container mx-auto">
        {error ? (
          <h1>Error...</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <CoinsTable coins={sortedData} />
        )}
      </div>
    </main>
  )
}
