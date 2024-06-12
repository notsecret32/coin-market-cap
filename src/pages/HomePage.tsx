import { Button, CoinTable, Error, Loading, Search } from 'src/components'
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

  const { data, sortedAndFilteredData, error, isLoading } = useCoinData()

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
      <div className="container mx-auto flex flex-col h-screen">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <>
            <div className="my-3">
              <Search />
            </div>
            <CoinTable coins={sortedAndFilteredData} />
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
