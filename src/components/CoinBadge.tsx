interface ICoinBudgeProps {
  id?: string
  name?: string
  symbol?: string
  imageUrl?: string
}

export const CoinBudge = ({ id, name, symbol, imageUrl }: ICoinBudgeProps) => {
  return (
    <div className="text-left py-3 flex flex-row items-center gap-2">
      <img src={imageUrl} alt={name} width={32} height={32} />
      <h1 className="font-semibold text-lg">{name}</h1>
      <p className="text-[#58667E]">{symbol}</p>
    </div>
  )
}
