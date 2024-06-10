interface ICoinNumberProps {
  number: number
}

export const CoinNumber = ({ number }: ICoinNumberProps) => {
  return <td className="text-left w-0 px-2 py-3 text-[#58667E]">{number}</td>
}
