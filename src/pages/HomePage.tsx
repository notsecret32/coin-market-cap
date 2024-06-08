import { Counter } from '@components/Counter'
import { UserList } from '@components/UserList'

export const HomePage: React.FC = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Coin Market Cap</h1>
      <Counter />
      <UserList />
    </main>
  )
}
