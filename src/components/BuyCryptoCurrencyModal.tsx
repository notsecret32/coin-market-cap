import { useState } from 'react'
import { useGetCryptoCurrencyDetailsQuery } from 'src/api/crypto-currency-details-api'
import { addCryptoToBriefcase } from 'src/redux/slices/briefcase-slice'
import { useAppDispatch } from 'src/redux/store'
import { ICryptoCurrency } from 'src/types'
import { formatNumberWithCommas, formatShortNumber } from 'src/utils'
import { Button } from './Button'
import { Modal } from './Modal'

interface IBuyCryptoCurrencyModalProps {
  crypto: ICryptoCurrency
  isOpen: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onTransactionSuccess?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BuyCryptoCurrencyModal = ({
  crypto,
  isOpen,
  onClose,
  onTransactionSuccess,
}: IBuyCryptoCurrencyModalProps) => {
  // States
  const [error, setError] = useState('')
  const [cryptoAmount, setCryptoAmount] = useState(0)

  // Redux
  const dispatch = useAppDispatch()

  // Hooks
  const { data: details } = useGetCryptoCurrencyDetailsQuery({
    id: crypto.id,
  })

  // Methods
  const handleBuyCryptoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!details) {
      setError('Не удалось получить данные о монете')
      return
    }

    if (cryptoAmount < 1) {
      setError('Минимальное кол-во монет на покупку: 1')
      return
    }

    dispatch(
      addCryptoToBriefcase({
        coin: {
          totalPrice: cryptoAmount * crypto.price,
          amount: cryptoAmount,
          ...crypto,
        },
      }),
    )

    setError('')
    setCryptoAmount(0)

    onTransactionSuccess?.(e)
  }

  // Statistics
  const totalPrice = cryptoAmount * crypto.price

  return (
    <Modal
      title={`Купить криптовалюту ${crypto?.name}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-row justify-between items-center mb-6">
        <h1>
          Кол-во монет (макс. {formatNumberWithCommas(details?.maxSupply)}):
        </h1>
        <input
          min={0}
          max={details?.maxSupply?.toString()}
          pattern="[0-9]*"
          className="w-1/2 px-2 py-1 rounded-lg text-black"
          placeholder={`До ${formatNumberWithCommas(details?.maxSupply)}`}
          type="number"
          value={cryptoAmount}
          onChange={(e) => setCryptoAmount(+e.target.value)}
        />
      </div>

      <div>{error}</div>

      <div className="flex flex-row">
        <Button
          className="w-full text-black"
          onClick={(e) => handleBuyCryptoClick(e)}
        >
          Купить (${formatShortNumber(totalPrice) ?? '0'})
        </Button>
      </div>
    </Modal>
  )
}
