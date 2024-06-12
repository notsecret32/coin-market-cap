import {
  useGetCryptoCurrencyChartQuery,
  useGetCryptoCurrencyDetailsQuery,
} from 'src/api/crypto-currency-details-api'
import { TimeIntervalEnum } from 'src/enums'

interface IUseCryptoCurrencyDetails {
  id: string
  interval: TimeIntervalEnum
}

export const useCryptoCurrencyDetails = ({
  id,
  interval,
}: IUseCryptoCurrencyDetails) => {
  const {
    data: cryptoCurrencyData,
    error: cryptoCurrencyError,
    isLoading: isCryptoCurrencyDataLoading,
  } = useGetCryptoCurrencyDetailsQuery({ id })

  const {
    data: cryptoCurrencyChartData,
    error: cryptoCurrencyChartError,
    isLoading: isCryptoCurrencyChartDataLoading,
  } = useGetCryptoCurrencyChartQuery({ id, interval })

  const error = cryptoCurrencyError || cryptoCurrencyChartError

  return {
    data: {
      ...cryptoCurrencyData,
      points: cryptoCurrencyChartData?.data,
    },
    error,
    isLoading: isCryptoCurrencyDataLoading && isCryptoCurrencyChartDataLoading,
  }
}
