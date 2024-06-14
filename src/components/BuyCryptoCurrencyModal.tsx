import { useGetCryptoCurrencyDetailsQuery } from 'src/api/crypto-currency-details-api'
import { ICryptoCurrency } from 'src/types'
import { formatNumberWithCommas } from 'src/utils'
import { Button } from './Button'
import { Modal } from './Modal'

interface IBuyCryptoCurrencyModalProps {
  crypto: ICryptoCurrency
  isOpen: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BuyCryptoCurrencyModal = ({
  crypto,
  isOpen,
  onClose,
}: IBuyCryptoCurrencyModalProps) => {
  const { data: details } = useGetCryptoCurrencyDetailsQuery({
    id: crypto.id,
  })

  return (
    <Modal
      title={`Купить криптовалюту ${crypto?.name}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-row justify-between items-center mb-6">
        <h1>Кол-во монет:</h1>
        <input
          className="w-1/2 px-2 py-1 rounded-lg text-black"
          type="text"
          placeholder={`До ${formatNumberWithCommas(details?.maxSupply)}`}
        />
      </div>

      <div className="flex flex-row">
        <Button className="w-full text-black">Купить</Button>
      </div>
    </Modal>
  )
}
