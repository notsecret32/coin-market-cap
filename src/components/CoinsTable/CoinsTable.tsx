import { CoinHeader, CoinRow } from 'src/components/CoinsTable'
import { IApiCoin } from 'src/types'

interface ICoinsTableProps {
  coins?: IApiCoin[]
}

export const CoinsTable = ({ coins }: ICoinsTableProps) => {
  return (
    <div className="overflow-x-auto lg:overflow-x-visible">
      {coins ? (
        <table className="w-full min-w-[600px]">
          <thead className="text-sm border-t border-b border-[#f0f1f6]">
            <CoinHeader />
          </thead>
          <tbody className="text-base font-semibold">
            {coins.map((coin, index) => (
              <CoinRow key={index} {...coin} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Нет данных</h1>
      )}
    </div>
  )
}
