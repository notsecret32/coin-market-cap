interface ICoinNameProps {
  id: number
  name: string
  symbol: string
}

export const CoinName = ({ id, name, symbol }: ICoinNameProps) => {
  return (
    <td className="text-left py-3">
      <div className="flex flex-row items-center gap-2">
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`}
          alt={name}
          width={32}
          height={32}
        />
        <p>{name}</p>
        <p className="text-[#58667E]">{symbol}</p>
      </div>
    </td>
  )
}
