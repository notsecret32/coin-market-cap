import { CoinHeaderColumn } from './components/CoinHeaderColumn'

interface ICoinHeaderData {
  id: number
  title?: string
  style: string
}

const columns: ICoinHeaderData[] = [
  {
    id: 0,
    style: 'text-left w-0 py-3 cursor-pointer',
  },
  {
    id: 1,
    title: '#',
    style: 'text-left w-0 py-3 cursor-pointer',
  },
  {
    id: 2,
    title: 'Название',
    style: 'text-left py-3 cursor-pointer',
  },
  {
    id: 3,
    title: 'Цена',
    style: 'text-left sm:text-right py-3 cursor-pointer',
  },
  {
    id: 4,
    title: 'Капитализация',
    style: 'text-left sm:text-right py-3 cursor-pointer',
  },
  {
    id: 5,
    title: '24ч %',
    style: 'text-right py-3 cursor-pointer',
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
