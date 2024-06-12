interface ICoinStatisticItemProps {
  label: string
  value: number | string | undefined
  symbol?: string
  prefix?: string
}

export const CoinStatisticItem = ({
  label,
  value,
  symbol,
  prefix,
}: ICoinStatisticItemProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="font-medium text-sm text-[#9b9db1]">{label}</h3>
      <h3 className="font-semibold text-sm">
        {symbol ? `${value} ${symbol}` : `${prefix ?? ''}${value}`}
      </h3>
    </div>
  )
}
