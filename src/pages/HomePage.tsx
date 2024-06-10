import { useGetCoinsListQuery } from 'src/api/coinsListApi'
import { Button, CoinsTable } from 'src/components'
import { SortingTableEnum } from 'src/enums'
import {
  nextPage,
  previousPage,
  setEndReached,
} from 'src/redux/slices/homePageSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'

export const HomePage = () => {
  const { start, limits, isStartReached, isEndReached } = useAppSelector(
    (state) => state.homePageSlice,
  )
  const { columnId, sortingType } = useAppSelector(
    (state) => state.sortingTableSlice,
  )
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isError } = useGetCoinsListQuery({
    start,
  })

  if (isError) {
    console.log(error)
  }

  const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(nextPage())

    if (data?.data === undefined) {
      return
    }

    data?.data.length < limits
      ? dispatch(setEndReached({ isEndReacher: true }))
      : dispatch(setEndReached({ isEndReacher: false }))
  }

  const handlePreviousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(previousPage())
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
          <>
            <CoinsTable coins={sortedData} />
            <div className="flex flex-row justify-center items-center gap-4 my-4">
              <Button
                className={isStartReached ? 'hidden' : 'block'}
                onClick={(e) => handlePreviousPage(e)}
              >
                Пред. страница
              </Button>
              <Button
                className={isEndReached ? 'hidden' : 'block'}
                onClick={(e) => handleNextPage(e)}
              >
                След. страница
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
