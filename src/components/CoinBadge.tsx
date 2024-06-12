interface ICoinBudgeProps {
  id?: number
  name?: string
  symbol?: string
}

export const CoinBudge = ({ id, name, symbol }: ICoinBudgeProps) => {
  return (
    <div className="text-left py-3 flex flex-row items-center gap-2">
      <img
        src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`}
        alt={name}
        width={32}
        height={32}
      />
      <h1 className="font-semibold text-lg">{name}</h1>
      <p className="text-[#58667E]">{symbol}</p>
    </div>
  )
}
