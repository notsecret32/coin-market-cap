import { Counter } from '@features/counter/Counter'
import { UserList } from '@features/counter/UserList'

export const HomePage: React.FC = () => {
  return (
    <main>
      <h1>Coin Market Cap</h1>
      <Counter />
      <UserList />
    </main>
  )
}
