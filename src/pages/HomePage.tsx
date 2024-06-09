import { useGetPopularCoinsListQuery } from 'src/api/coinsListApi'
import { CoinsTable } from 'src/components/CoinsTable'

export const HomePage = () => {
  const { data, error, isLoading, isError } = useGetPopularCoinsListQuery()

  if (isError) {
    console.log(error)
  }

  return (
    <main>
      {error ? (
        <>Error...</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <>{data && <CoinsTable coins={data.data} />}</>
      )}
    </main>
  )
}
