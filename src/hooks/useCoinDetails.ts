import {
  useGetCoinGraphDataQuery,
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
  const {
    data: coinGraphData,
    error: coinGraphDataError,
    isLoading: isCoinGraphDataLoading,
  } = useGetCoinGraphDataQuery({ id })

  return {
    data: {
      ...coinInfoData?.data,
      ...coinMarketData?.data,
      ...coinGraphData?.data,
    },
    error: {
      ...coinInfoError,
      ...coinMarketInfoError,
      ...coinGraphDataError,
    },
    isLoading:
      isCoinInfoLoading && isCoinMarketInfoLoading && isCoinGraphDataLoading,
  }
}
