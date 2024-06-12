import { useNavigate } from 'react-router-dom'
import {
  CoinCapitalization,
  CoinLikeButton,
  CoinName,
  CoinNumber,
  CoinPercentChange,
  CoinPrice,
} from 'src/components'

interface ICoinRowProps {
  id: number
  name: string
  symbol: string
  slug: string
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
  slug,
}: ICoinRowProps) => {
  const navigate = useNavigate()

  const navigateToPage = (slug: string) => {
    navigate(`/currencies/${slug}/`, {
      state: {
        id,
      },
    })
  }

  return (
    <tr
      key={id}
      className="border-b border-[#f0f1f6] hover:bg-[#c5c5ca] cursor-pointer"
      onClick={() => navigateToPage(slug)}
    >
      <CoinLikeButton />
      <CoinNumber number={id} />
      <CoinName id={id} name={name} symbol={symbol} />
      <CoinPrice price={price} />
      <CoinCapitalization capitalization={capitalization} />
      <CoinPercentChange percent={percentChange24h} />
    </tr>
  )
}
