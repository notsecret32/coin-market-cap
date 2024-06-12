import { formatNumberWithCommas } from 'src/utils'

interface ICoinStatisticItemProps {
  label: string
  value: number | undefined
  symbol?: string
}

export const CoinStatisticItem = ({
  label,
  value,
  symbol,
}: ICoinStatisticItemProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="font-medium text-sm text-[#9b9db1]">{label}</h3>
      <h3 className="font-semibold text-sm">
        {formatNumberWithCommas(value)} ${symbol}
      </h3>
    </div>
  )
}
