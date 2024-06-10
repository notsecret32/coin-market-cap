import { formatNumber } from 'src/utils'

interface ICoinCapitalizationProps {
  capitalization: number
}

export const CoinCapitalization = ({
  capitalization,
}: ICoinCapitalizationProps) => {
  return (
    <td className="text-left sm:text-right py-3">
      ${formatNumber(capitalization)}
    </td>
  )
}
