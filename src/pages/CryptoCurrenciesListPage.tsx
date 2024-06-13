import { Button, CoinTable, Layout, Search } from 'src/components'
import { useCryptoCurrenciesList } from 'src/hooks'
import {
  nextPage,
  previousPage,
  setEndReached,
} from 'src/redux/slices/homePageSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'

export const CryptoCurrenciesListPage = () => {
  const { isStartReached, isEndReached, limits } = useAppSelector(
    (state) => state.homePageSlice,
  )
  const dispatch = useAppDispatch()

  const { data, sortedAndFilteredData, error, isLoading } =
    useCryptoCurrenciesList()

  const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(nextPage())

    if (data === undefined) {
      return
    }

    data.length < limits
      ? dispatch(setEndReached({ isEndReacher: true }))
      : dispatch(setEndReached({ isEndReacher: false }))
  }

  const handlePreviousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(previousPage())
  }

  return (
    <Layout error={error} isLoading={isLoading}>
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
    </Layout>
  )
}
