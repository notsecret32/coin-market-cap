import { useGetCryptoCurrenciesListQuery } from 'src/api/crypto-currencies-list-api'
import { useAppSelector } from 'src/redux/store'

export const useCryptoCurrenciesList = () => {
  const { start } = useAppSelector((state) => state.homePageSlice)
  const { data, error, isLoading, isError } = useGetCryptoCurrenciesListQuery({
    start,
  })

  return {
    data,
    error,
    isLoading,
    isError,
  }
}
