import { useLocation } from 'react-router-dom'
import { CoinDetails, Error, Loading } from 'src/components'
import { useCoinDetails } from 'src/hooks'

export const CoinDetailsPage = () => {
  const location = useLocation()

  const { data, error, isLoading } = useCoinDetails({
    id: location.state?.id,
  })

  return (
    <main>
      <div className="flex flex-col h-screen sm:w-2/3 xl:w-1/2 mx-4 sm:mx-auto">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <CoinDetails {...data} />
        )}
      </div>
    </main>
  )
}
