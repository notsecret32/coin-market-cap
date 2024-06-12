import { CoinHeader, CoinRow } from 'src/components'
import { ICryptoCurrency } from 'src/types'

interface ICoinsTableProps {
  coins?: ICryptoCurrency[]
}

export const CoinTable = ({ coins }: ICoinsTableProps) => {
  if (!coins) {
    return <h1 className="text-center">Данные отсутствуют</h1>
  }

  return (
    <div className="overflow-x-auto lg:overflow-x-visible">
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
    </div>
  )
}
