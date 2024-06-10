import {
  CoinCapitalization,
  CoinLikeButton,
  CoinName,
  CoinNumber,
  CoinPercentChange,
  CoinPrice,
} from 'src/components/CoinsTable'

interface ICoinRowProps {
  id: number
  name: string
  symbol: string
  price: number
  capitalization: number
  percentChange24h: number
}

export const CoinRow = ({
  id,
  name,
  percentChange24h,
  price,
  capitalization,
  symbol,
}: ICoinRowProps) => {
  return (
    <tr key={id} className="border-b border-[#f0f1f6]">
      <CoinLikeButton />
      <CoinNumber number={id} />
      <CoinName id={id} name={name} symbol={symbol} />
      <CoinPrice price={price} />
      <CoinCapitalization capitalization={capitalization} />
      <CoinPercentChange percent={percentChange24h} />
    </tr>
  )
}
