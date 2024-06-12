import { CoinDetails, Error, Loading } from 'src/components'

interface ITest {
  id?: number | undefined
  name?: string | undefined
  symbol?: string | undefined
  imageUrl?: string | undefined
  price?: number | undefined
  rank?: number | undefined
  totalSupply?: number | undefined
  maxSupply?: number | undefined
  capitalization?: number | undefined
}

const test: ITest = {
  id: 1,
  name: 'Bitcoin',
  symbol: 'BTC',
  imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
  price: 67367.86600609115,
  rank: 1,
  totalSupply: 19711006,
  maxSupply: 21000000,
  capitalization: 1327888411053.2588,
}

export const CoinDetailsPage = () => {
  //const location = useLocation()

  const isLoading = false
  const error = undefined

  // const { data, error, isLoading } = useCoinDetails({
  //   id: location.state?.id,
  // })

  return (
    <main>
      <div className="flex flex-col h-screen sm:w-2/3 xl:w-1/2 mx-4 sm:mx-auto">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <CoinDetails {...test} />
        )}
      </div>
    </main>
  )
}
