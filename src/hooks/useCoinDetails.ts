import {
  useGetCoinInfoQuery,
  useGetCoinMarketInfoQuery,
} from 'src/api/coinDetailsApi'

interface IUseCoinDetails {
  id: number
}

export const useCoinDetails = ({ id }: IUseCoinDetails) => {
  const {
    data: coinInfoData,
    error: coinInfoError,
    isLoading: isCoinInfoLoading,
  } = useGetCoinInfoQuery({
    id,
  })
  const {
    data: coinMarketData,
    error: coinMarketInfoError,
    isLoading: isCoinMarketInfoLoading,
  } = useGetCoinMarketInfoQuery({ id })

  return {
    data: {
      ...coinInfoData?.data,
      ...coinMarketData?.data,
    },
    error: {
      ...coinInfoError,
      ...coinMarketInfoError,
    },
    isLoading: isCoinInfoLoading && isCoinMarketInfoLoading,
  }
}
