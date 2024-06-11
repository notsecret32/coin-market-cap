import { Button, CoinsTable, Search } from 'src/components'
import { useCoinData } from 'src/hooks'
import {
  nextPage,
  previousPage,
  setEndReached,
} from 'src/redux/slices/homePageSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'

export const HomePage = () => {
  const { isStartReached, isEndReached, limits } = useAppSelector(
    (state) => state.homePageSlice,
  )
  const dispatch = useAppDispatch()

  const { data, sortedAndFilteredData, error, isLoading, isError } =
    useCoinData()

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

  return (
    <main>
      <div className="container mx-auto">
        {error ? (
          <h1>Error...</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="my-3">
              <Search />
            </div>
            <CoinsTable coins={sortedAndFilteredData} />
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
