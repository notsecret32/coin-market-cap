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
import { formatNumberWithCommas } from 'src/utils'

export const CryptoCurrencyDetailsPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  if (!id || id === undefined) {
    navigate(-1)
  }

  const { interval } = useAppSelector((state) => state.timeIntervalSlice)

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
        imageUrl={data.imageUrl}
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

      {/* Statistics */}
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
    </Layout>
    // <main>
    //   <div className="flex flex-col h-screen sm:w-2/3 xl:w-1/2 mx-4 sm:mx-auto">
    //     {isLoading ? (
    //       <Loading />
    //     ) : !data || error ? (
    //       <Error error={error} />
    //     ) : (
    //       <>
    //         {/* Header */}
    //         <CoinDetailsHeader
    //           id={data.id}
    //           name={data.name}
    //           symbol={data.symbol}
    //           imageUrl={data.imageUrl}
    //         />

    //         {/* Price */}
    //         <div className="my-6">
    //           <h1 className="font-inter font-semibold text-4xl">
    //             ${data.price?.toFixed(2)}
    //           </h1>
    //         </div>

    //         {/* Intervals */}
    //         <CryptoCurrencyChartIntervals />

    //         {/* Chart */}
    //         <CryptoCurrencyChart points={data.points} />

    //         {/* Statistics */}
    //         <div className="flex flex-col mt-auto mb-16 gap-y-4">
    //           <h2 className="font-inter font-semibold text-sm">Статистика</h2>
    //           <CoinStatisticItem label="Ранг" value={data.rank} />
    //           <CoinStatisticItem
    //             label="Общий запас"
    //             value={formatNumberWithCommas(data.supply)}
    //             symbol={data.symbol}
    //           />
    //           <CoinStatisticItem
    //             label="Макс. запас"
    //             value={formatNumberWithCommas(data.maxSupply)}
    //             symbol={data.symbol}
    //           />
    //           <CoinStatisticItem
    //             label="Капитализация"
    //             prefix="$"
    //             value={formatNumberWithCommas(data.capitalization)}
    //           />
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </main>
  )
}
