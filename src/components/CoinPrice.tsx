import { formatShortNumber } from 'src/utils'

interface ICoinPriceProps {
  price: number
}

export const CoinPrice = ({ price }: ICoinPriceProps) => {
  return (
    <td className="text-left sm:text-right py-3">
      ${formatShortNumber(price)}
    </td>
  )
}
