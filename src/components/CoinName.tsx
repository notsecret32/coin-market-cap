import { getImageUrl } from 'src/utils'

interface ICoinNameProps {
  id?: number
  name?: string
  symbol?: string
}

export const CoinName = ({ id, name, symbol }: ICoinNameProps) => {
  return (
    <td className="text-left py-3 flex flex-row items-center gap-2">
      <img src={getImageUrl(id)} alt={name} width={32} height={32} />
      <h1>{name}</h1>
      <p className="text-[#58667E]">{symbol}</p>
    </td>
  )
}
