import { CoinHeaderColumn } from 'src/components'

interface ICoinHeaderData {
  id: number
  title?: string
  style: string
  position: string
  sortable: boolean
}

const columns: ICoinHeaderData[] = [
  {
    id: 0,
    style: 'text-left w-0 py-3 cursor-pointer',
    position: 'justify-center',
    sortable: false,
  },
  {
    id: 1,
    title: 'Название',
    style: 'text-left py-3 cursor-pointer sm:table-cell',
    position: 'justify-start',
    sortable: false,
  },
  {
    id: 2,
    title: 'Цена',
    style: 'text-left sm:text-right py-3 cursor-pointer',
    position: 'justify-start sm:justify-end',
    sortable: true,
  },
  {
    id: 3,
    title: 'Капитализация',
    style: 'text-left sm:text-right py-3 cursor-pointer',
    position: 'justify-start sm:justify-end',
    sortable: true,
  },
  {
    id: 4,
    title: '24ч %',
    style: 'text-right py-3 cursor-pointer',
    position: 'justify-end',
    sortable: true,
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
