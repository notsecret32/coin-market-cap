import { Counter, UserList } from 'src/components'

export const HomePage: React.FC = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Coin Market Cap</h1>
      <Counter />
      <UserList />
    </main>
  )
}
