import { IApiCoin } from 'src/types'

interface ICoinsTableProps {
  coins: IApiCoin[]
}

export const CoinsTable = ({ coins }: ICoinsTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Slug</th>
          <th>Price</th>
          <th>24h Change</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={coin.id}>
            <td>+</td>
            <td>{index + 1}</td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{coin.slug}</td>
            <td>${coin.price.toFixed(2)}</td>
            <td>{coin.percentChange24h.toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
