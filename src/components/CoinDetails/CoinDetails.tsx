import { IApiCoinGraphData, IApiCoinInfo, IApiCoinMarketInfo } from 'src/types'

interface ICoinDetailsProps
  extends IApiCoinInfo,
    IApiCoinMarketInfo,
    IApiCoinGraphData {}

export const CoinDetails = ({
  id,
  name,
  symbol,
  imageUrl,
  price,
  rank,
  totalSupply,
  maxSupply,
  capitalization,
  graph,
}: ICoinDetailsProps) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  )
}
