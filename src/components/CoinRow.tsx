import { useNavigate } from 'react-router-dom'
import {
  CoinCapitalization,
  CoinLikeButton,
  CoinName,
  CoinPercentChange,
  CoinPrice,
} from 'src/components'

interface ICoinRowProps {
  id: string
  imageUrl: string
  name: string
  symbol: string
  price: number
  capitalization: number
  changePercent24Hr: number
}

export const CoinRow = ({
  id,
  name,
  imageUrl,
  changePercent24Hr,
  price,
  capitalization,
  symbol,
}: ICoinRowProps) => {
  const navigate = useNavigate()

  const navigateToPage = (id: string) => {
    navigate(`/currencies/${id}/`)
  }

  return (
    <tr
      key={id}
      className="border-b border-[#f0f1f6] hover:bg-[#c5c5ca] cursor-pointer"
      onClick={() => navigateToPage(id)}
    >
      <CoinLikeButton />
      <CoinName id={id} name={name} symbol={symbol} imageUrl={imageUrl} />
      <CoinPrice price={price} />
      <CoinCapitalization capitalization={capitalization} />
      <CoinPercentChange percent={changePercent24Hr} />
    </tr>
  )
}
