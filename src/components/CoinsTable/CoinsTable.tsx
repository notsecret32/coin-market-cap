import { CoinRow } from 'src/components/CoinsTable'
import { IApiCoin } from 'src/types'

interface ICoinsTableProps {
  coins: IApiCoin[]
}

export const CoinsTable = ({ coins }: ICoinsTableProps) => {
  return (
    <table className="w-full">
      <thead className="text-sm border-t border-b border-[#f0f1f6]">
        <tr>
          <th className="text-left w-0 py-3"></th>
          <th className="text-left w-0 py-3">#</th>
          <th className="text-left py-3">Название</th>
          <th className="text-left sm:text-right py-3">Цена</th>
          <th className="text-left sm:text-right py-3">Капитализация</th>
          <th className="text-right py-3">24ч %</th>
        </tr>
      </thead>
      <tbody className="text-base font-semibold">
        {coins.map((coin, index) => (
          <CoinRow key={index} number={index + 1} {...coin} />
        ))}
      </tbody>
    </table>
  )
}
