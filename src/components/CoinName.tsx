interface ICoinNameProps {
  id?: string
  name?: string
  symbol?: string
  imageUrl?: string
}

export const CoinName = ({ id, name, symbol, imageUrl }: ICoinNameProps) => {
  return (
    <td className="text-left py-3 flex flex-row items-center gap-2">
      <img src={imageUrl} alt={name} width={32} height={32} />
      <h1>{name}</h1>
      <p className="text-[#58667E]">{symbol}</p>
    </td>
  )
}
