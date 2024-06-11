import { IApiCoinInfo, IApiCoinMarketInfo } from 'src/types'

interface ICoinDetailsProps extends IApiCoinInfo, IApiCoinMarketInfo {}

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
}: ICoinDetailsProps) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  )
}
