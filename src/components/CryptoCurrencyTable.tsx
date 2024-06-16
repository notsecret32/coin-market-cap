import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  BuyCryptoCurrencyModal,
  CryptoCurrencyTableCell,
  CryptoCurrencyTableColumn,
  CryptoCurrencyTableRow,
} from 'src/components'
import { ICryptoCurrency } from 'src/types'
import { formatShortNumber, getImageUrl } from 'src/utils'

interface ITableProps {
  cryptoCurrencies: ICryptoCurrency[] | undefined
}

export const CryptoCurrencyTable = ({ cryptoCurrencies }: ITableProps) => {
  // Navigation
  const navigate = useNavigate()

  const navigateToPage = (id: string) => {
    navigate(`/currencies/${id}/`)
  }

  // State
  const [crypto, setCrypto] = useState<ICryptoCurrency>({
    id: '',
    name: '',
    symbol: '',
    price: 0,
    capitalization: 0,
    changePercent24Hr: 0,
  })
  const [isOpen, setIsOpen] = useState(false)

  // Modal
  const openModal = (
    e: React.MouseEvent<HTMLButtonElement>,
    crypto: ICryptoCurrency,
  ) => {
    e.stopPropagation()
    setIsOpen(true)
    setCrypto(crypto)
  }

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(false)
  }

  return (
    <>
      <div className="overflow-x-auto lg:overflow-x-visible">
        <table className="w-full min-w-[600px]">
          <thead className="text-sm border-t border-b border-[#f0f1f6]">
            <tr>
              <CryptoCurrencyTableColumn className="justify-center w-0"></CryptoCurrencyTableColumn>
              <CryptoCurrencyTableColumn className="justify-start sm:table-cell">
                Название
              </CryptoCurrencyTableColumn>
              <CryptoCurrencyTableColumn
                sortColumn="price"
                className="sm:text-right cursor-pointer"
                position="justify-start sm:justify-end"
              >
                Цена
              </CryptoCurrencyTableColumn>
              <CryptoCurrencyTableColumn
                sortColumn="capitalization"
                className="sm:text-right cursor-pointer"
                position="justify-start sm:justify-end"
              >
                Капитализация
              </CryptoCurrencyTableColumn>
              <CryptoCurrencyTableColumn
                sortColumn="changePercent24Hr"
                className="text-right justify-end cursor-pointer"
                position="justify-end"
              >
                24ч %
              </CryptoCurrencyTableColumn>
            </tr>
          </thead>
          <tbody>
            {!cryptoCurrencies ? (
              <CryptoCurrencyTableRow>Нет данных</CryptoCurrencyTableRow>
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
                  <CryptoCurrencyTableRow
                    key={id}
                    onClick={() => navigateToPage(id)}
                  >
                    {/* Add Button */}
                    <CryptoCurrencyTableCell className="px-2">
                      <Button
                        onClick={(e) =>
                          openModal(e, {
                            id,
                            name,
                            symbol,
                            price,
                            capitalization,
                            changePercent24Hr,
                          })
                        }
                      >
                        <IoMdAdd />
                      </Button>
                    </CryptoCurrencyTableCell>

                    {/* Crypto Currency Card Name */}
                    <CryptoCurrencyTableCell className="flex flex-row items-center gap-2">
                      <img
                        src={getImageUrl(symbol)}
                        alt={name}
                        width={32}
                        height={32}
                      />
                      <h1>{name}</h1>
                      <p className="text-[#58667E]">{symbol}</p>
                    </CryptoCurrencyTableCell>

                    {/* Price */}
                    <CryptoCurrencyTableCell className="text-left sm:text-right">
                      ${formatShortNumber(price)}
                    </CryptoCurrencyTableCell>

                    {/* Capitalization */}
                    <CryptoCurrencyTableCell className="text-left sm:text-right">
                      ${formatShortNumber(capitalization)}
                    </CryptoCurrencyTableCell>

                    {/* Percent Change 24H */}
                    <CryptoCurrencyTableCell
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
                    </CryptoCurrencyTableCell>
                  </CryptoCurrencyTableRow>
                ),
              )
            )}
          </tbody>
        </table>
      </div>
      <BuyCryptoCurrencyModal
        crypto={crypto}
        isOpen={isOpen}
        onClose={closeModal}
        onTransactionSuccess={closeModal}
      />
    </>
  )
}
