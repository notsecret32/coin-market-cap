import { useGetKeyInfoStatusQuery } from 'src/api/keyInfoApi'
import { Counter, UserList } from 'src/components'

export const HomePage: React.FC = () => {
  const { data } = useGetKeyInfoStatusQuery()

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Coin Market Cap</h1>
      {JSON.stringify(data, null, 2)}
      <Counter />
      <UserList />
    </main>
  )
}
