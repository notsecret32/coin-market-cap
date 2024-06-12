import { IApiCoinInfo, IApiCoinMarketInfo } from 'src/types'
import { formatNumberWithCommas } from 'src/utils'
import { CoinDetailsHeader } from './components'

interface ICoinDetailsProps extends IApiCoinInfo, IApiCoinMarketInfo {}

export const CoinDetails = ({
  id,
  name,
  symbol,
  price,
  rank,
  totalSupply,
  maxSupply,
  capitalization,
}: ICoinDetailsProps) => {
  return (
    <>
      <CoinDetailsHeader id={id} name={name} symbol={symbol} />
      <div className="my-6">
        <h1 className="font-inter font-semibold text-4xl">
          ${price?.toFixed(2)}
        </h1>
      </div>
      <div className="flex flex-col mt-auto mb-16 gap-y-4">
        <h2 className="font-inter font-semibold text-sm">Статистика</h2>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-medium text-sm text-[#9b9db1]">Ранг</h3>
          <h3 className="font-semibold text-sm">#{rank}</h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-medium text-sm text-[#9b9db1]">Общий запас</h3>
          <h3 className="font-semibold text-sm">
            {formatNumberWithCommas(totalSupply)} {symbol}
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-medium text-sm text-[#9b9db1]">Макс. запас</h3>
          <h3 className="font-semibold text-sm">
            {formatNumberWithCommas(maxSupply)} {symbol}
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-medium text-sm text-[#9b9db1]">Капитализация</h3>
          <h3 className="font-semibold text-sm">
            ${formatNumberWithCommas(capitalization)}
          </h3>
        </div>
      </div>
    </>
  )
}
