import { useParams } from 'react-router-dom'
import { useGetCryptoCurrencyDetailsQuery } from 'src/api/crypto-currency-details-api'
import {
  CoinDetailsHeader,
  CoinStatisticItem,
  Error,
  Loading,
} from 'src/components'
import { formatNumberWithCommas } from 'src/utils'

export const CoinDetailsPage = () => {
  const { id } = useParams()

  const { data, error, isLoading } = useGetCryptoCurrencyDetailsQuery({
    id: id ?? 'bitcoin',
  })

  return (
    <main>
      <div className="flex flex-col h-screen sm:w-2/3 xl:w-1/2 mx-4 sm:mx-auto">
        {isLoading ? (
          <Loading />
        ) : !data || error ? (
          <Error error={error} />
        ) : (
          <>
            <CoinDetailsHeader
              id={data.id}
              name={data.name}
              symbol={data.symbol}
              imageUrl={data.imageUrl}
            />
            <div className="my-6">
              <h1 className="font-inter font-semibold text-4xl">
                ${data.price?.toFixed(2)}
              </h1>
            </div>
            <div className="flex flex-col mt-auto mb-16 gap-y-4">
              <h2 className="font-inter font-semibold text-sm">Статистика</h2>
              <CoinStatisticItem label="Ранг" value={data.rank} />
              <CoinStatisticItem
                label="Общий запас"
                value={formatNumberWithCommas(data.supply)}
                symbol={data.symbol}
              />
              <CoinStatisticItem
                label="Макс. запас"
                value={formatNumberWithCommas(data.maxSupply)}
                symbol={data.symbol}
              />
              <CoinStatisticItem
                label="Капитализация"
                prefix="$"
                value={formatNumberWithCommas(data.capitalization)}
              />
            </div>
          </>
        )}
      </div>
    </main>
  )
}
