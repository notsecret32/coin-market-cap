import { CoinHeader, CoinRow } from 'src/components/CoinsTable'
import { IApiCoin } from 'src/types'

interface ICoinsTableProps {
  coins: IApiCoin[]
}

export const CoinsTable = ({ coins }: ICoinsTableProps) => {
  return (
    <table className="w-full">
      <thead className="text-sm border-t border-b border-[#f0f1f6]">
        <CoinHeader />
      </thead>
      <tbody className="text-base font-semibold">
        {coins.map((coin, index) => (
          <CoinRow key={index} number={index + 1} {...coin} />
        ))}
      </tbody>
    </table>
  )
}
