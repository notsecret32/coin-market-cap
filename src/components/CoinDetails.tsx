import { CoinDetailsHeader, CoinStatisticItem } from 'src/components'
import { IApiCoinInfo, IApiCoinMarketInfo } from 'src/types'

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
        <CoinStatisticItem label="Ранг" value={rank} />
        <CoinStatisticItem
          label="Общий запас"
          value={totalSupply}
          symbol={symbol}
        />
        <CoinStatisticItem
          label="Макс. запас"
          value={maxSupply}
          symbol={symbol}
        />
        <CoinStatisticItem label="Капитализация" value={capitalization} />
      </div>
    </>
  )
}
