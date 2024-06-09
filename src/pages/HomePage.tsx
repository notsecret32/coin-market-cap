import { useGetPopularCoinsListQuery } from 'src/api/coinsListApi'
import { CoinsTable } from 'src/components'

export const HomePage = () => {
  const { data, error, isLoading, isError } = useGetPopularCoinsListQuery()

  if (isError) {
    console.log(error)
  }

  return (
    <main>
      <div className="container mx-auto">
        {error ? (
          <h1>Error...</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>{data && <CoinsTable coins={data.data} />}</>
        )}
      </div>
    </main>
  )
}
