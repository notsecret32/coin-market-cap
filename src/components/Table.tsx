import { IoMdAdd } from 'react-icons/io'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { Button, TableCell, TableColumn, TableRow } from 'src/components'
import { ICryptoCurrency } from 'src/types'
import { formatShortNumber, getImageUrl } from 'src/utils'

interface ITableProps {
  cryptoCurrencies: ICryptoCurrency[] | undefined
}

export const Table = ({ cryptoCurrencies }: ITableProps) => {
  const navigate = useNavigate()

  const navigateToPage = (id: string) => {
    navigate(`/currencies/${id}/`)
  }

  return (
    <div className="overflow-x-auto lg:overflow-x-visible">
      <table className="w-full min-w-[600px]">
        <thead className="text-sm border-t border-b border-[#f0f1f6]">
          <tr>
            <TableColumn className="justify-center w-0"></TableColumn>
            <TableColumn className="justify-start sm:table-cell">
              Название
            </TableColumn>
            <TableColumn
              sortColumn="price"
              className="sm:text-right cursor-pointer"
              position="justify-start sm:justify-end"
            >
              Цена
            </TableColumn>
            <TableColumn
              sortColumn="capitalization"
              className="sm:text-right cursor-pointer"
              position="justify-start sm:justify-end"
            >
              Капитализация
            </TableColumn>
            <TableColumn
              sortColumn="changePercent24Hr"
              className="text-right justify-end cursor-pointer"
              position="justify-end"
            >
              24ч %
            </TableColumn>
          </tr>
        </thead>
        <tbody>
          {!cryptoCurrencies ? (
            <TableRow>Нет данных</TableRow>
          ) : (
            cryptoCurrencies.map(
              ({
                id,
                name,
                symbol,
                price,
                capitalization,
                changePercent24Hr,
              }) => (
                <TableRow key={id} onClick={() => navigateToPage(id)}>
                  {/* Add Button */}
                  <TableCell className="px-2">
                    <Button>
                      <IoMdAdd />
                    </Button>
                  </TableCell>

                  {/* Crypto Currency Card Name */}
                  <TableCell className="flex flex-row items-center gap-2">
                    <img
                      src={getImageUrl(symbol)}
                      alt={name}
                      width={32}
                      height={32}
                    />
                    <h1>{name}</h1>
                    <p className="text-[#58667E]">{symbol}</p>
                  </TableCell>

                  {/* Price */}
                  <TableCell className="text-left sm:text-right">
                    ${formatShortNumber(price)}
                  </TableCell>

                  {/* Capitalization */}
                  <TableCell className="text-left sm:text-right">
                    ${formatShortNumber(capitalization)}
                  </TableCell>

                  {/* Percent Change 24H */}
                  <TableCell
                    className={`text-right py-3 ${changePercent24Hr >= 0 ? 'text-[#61ce78]' : 'text-[#cf3d4c]'}`}
                  >
                    <div className="flex flex-row justify-end items-center">
                      {changePercent24Hr >= 0 ? (
                        <TiArrowSortedUp />
                      ) : (
                        <TiArrowSortedDown />
                      )}
                      <p>{Math.abs(changePercent24Hr).toFixed(2)}%</p>
                    </div>
                  </TableCell>
                </TableRow>
              ),
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
