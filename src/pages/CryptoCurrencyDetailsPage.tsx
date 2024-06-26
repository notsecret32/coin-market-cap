import { useNavigate, useParams } from 'react-router-dom'
import {
  CoinDetailsHeader,
  CoinStatisticItem,
  CryptoCurrencyChart,
  Layout,
} from 'src/components'
import { CryptoCurrencyChartIntervals } from 'src/components/CryptoCurrencyChartIntervals'
import { useCryptoCurrencyDetails } from 'src/hooks'
import { useAppSelector } from 'src/redux/store'
import { formatNumberWithCommas, getImageUrl } from 'src/utils'

export const CryptoCurrencyDetailsPage = () => {
  // Navigation
  const { id } = useParams()
  const navigate = useNavigate()

  if (!id || id === undefined) {
    navigate(-1)
  }

  // Redux
  const { interval } = useAppSelector((state) => state.timeIntervalSlice)

  // Hooks
  const { data, error, isLoading } = useCryptoCurrencyDetails({
    id: id!,
    interval: interval,
  })

  return (
    <Layout error={error} isLoading={isLoading}>
      {/* Header */}
      <CoinDetailsHeader
        id={data.id}
        name={data.name}
        symbol={data.symbol}
        imageUrl={getImageUrl(data.symbol)}
      />

      {/* Price */}
      <div className="my-6">
        <h1 className="font-inter font-semibold text-4xl">
          ${data.price?.toFixed(2)}
        </h1>
      </div>

      {/* Intervals */}
      <CryptoCurrencyChartIntervals />

      {/* Chart */}
      <CryptoCurrencyChart points={data.points} />

      {/* Statistics Block */}
      <div className="container mx-auto mt-4">
        <h2 className="font-inter font-semibold text-lg mb-2 text-center">
          Статистика
        </h2>
        <div className="flex flex-col gap-y-4">
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
      </div>
    </Layout>
  )
}
