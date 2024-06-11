import { IApiCoinInfo, IApiCoinMarketInfo } from 'src/types'

interface ICoinDetailsProps extends IApiCoinInfo, IApiCoinMarketInfo {}

export const CoinDetails = ({
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
      <p>{name}</p>
    </div>
  )
}
