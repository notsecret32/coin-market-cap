import { CoinHeaderColumn } from './components/CoinHeaderColumn'

interface ICoinHeaderData {
  title?: string
  style: string
}

const columns: ICoinHeaderData[] = [
  {
    style: 'text-left w-0 py-3',
  },
  {
    title: '#',
    style: 'text-left w-0 py-3',
  },
  {
    title: 'Название',
    style: 'text-left py-3',
  },
  {
    title: 'Цена',
    style: 'text-left sm:text-right py-3',
  },
  {
    title: 'Капитализация',
    style: 'text-left sm:text-right py-3',
  },
  {
    title: '24ч %',
    style: 'text-right py-3',
  },
]

export const CoinHeader = () => {
  return (
    <tr>
      {columns.map((column, index) => (
        <CoinHeaderColumn key={index} {...column} />
      ))}
    </tr>
  )
}
