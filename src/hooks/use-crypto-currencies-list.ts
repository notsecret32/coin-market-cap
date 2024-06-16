import { useGetCryptoCurrenciesListQuery } from 'src/api/crypto-currencies-list-api'
import { useAppSelector } from 'src/redux/store'

/**
 * Returns a list of cryptocurrencies from a specific position.
 */
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
