import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

interface ICoinPercentChangeProps {
  percent: number
}

export const CoinPercentChange = ({ percent }: ICoinPercentChangeProps) => {
  const isPositivePercent = () => (percent >= 0 ? true : false)

  return (
    <td
      className={`text-right py-3 ${isPositivePercent() ? 'text-[#61ce78]' : 'text-[#cf3d4c]'}`}
    >
      <div className="flex flex-row justify-end items-center">
        {isPositivePercent() ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        <p>{Math.abs(percent).toFixed(2)}%</p>
      </div>
    </td>
  )
}
