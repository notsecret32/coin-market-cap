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
      <div className="container mx-auto flex flex-col h-screen">
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
