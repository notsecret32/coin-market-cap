import {
  CoinCapitalization,
  CoinName,
  CoinNumber,
  CoinPercentChange,
  CoinPrice,
  CoinStar,
} from 'src/components/CoinsTable'

interface ICoinRowProps {
  id: number
  number: number
  name: string
  symbol: string
  price: number
  capitalization: number
  percentChange24h: number
}

export const CoinRow = ({
  id,
  name,
  number,
  percentChange24h,
  price,
  capitalization,
  symbol,
}: ICoinRowProps) => {
  return (
    <tr key={id} className="border-b border-[#f0f1f6]">
      <CoinStar />
      <CoinNumber number={number} />
      <CoinName id={id} name={name} symbol={symbol} />
      <CoinPrice price={price} />
      <CoinCapitalization capitalization={capitalization} />
      <CoinPercentChange percent={percentChange24h} />
    </tr>
  )
}
