import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { useBriefcase } from 'src/hooks'
import { removeCryptoFromBriefcase } from 'src/redux/slices/briefcase-slice'
import { useAppDispatch } from 'src/redux/store'
import { formatNumberWithCommas, formatShortNumber } from 'src/utils'
import { Modal } from './Modal'

interface IBriefcaseModalProps {
  isOpen: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BriefcaseModal = ({ isOpen, onClose }: IBriefcaseModalProps) => {
  const dispatch = useAppDispatch()
  const { briefcase } = useBriefcase()

  const handleRemoveCrypto = (e: React.MouseEvent<SVGElement>, id: string) => {
    e.preventDefault()
    dispatch(removeCryptoFromBriefcase({ id }))
  }

  const priceAmount = briefcase?.coins.reduce(
    (prev, curr) => (prev += curr.price),
    0,
  )

  const totalCoinAmount = briefcase?.coins.reduce(
    (prev, curr) => (prev += curr.amount),
    0,
  )

  const totalPriceAmount = briefcase?.coins.reduce(
    (prev, curr) => (prev += curr.totalPrice),
    0,
  )

  return (
    <Modal
      title={`Портфель ($${formatShortNumber(briefcase?.amount)})`}
      isOpen={isOpen}
      onClose={onClose}
    >
      {briefcase?.coins && briefcase.coins.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="text-white">
              <th className="text-start">Название</th>
              <th className="text-start">Цена</th>
              <th className="text-start">Кол-во</th>
              <th className="text-start">Общая цена</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {briefcase.coins
              .sort((a, b) => b.price - a.price)
              .map(({ id, name, amount, price, totalPrice }) => (
                <tr key={id}>
                  <td className="py-1">
                    <h2>{name}</h2>
                  </td>
                  <td className="py-1">
                    <h2>${formatNumberWithCommas(price)}</h2>
                  </td>
                  <td className="py-1">
                    <h2>{amount}</h2>
                  </td>
                  <td className="py-1">
                    <h2>${formatNumberWithCommas(totalPrice)}</h2>
                  </td>
                  <td className="py-1">
                    <IoMdRemoveCircleOutline
                      onClick={(e) => handleRemoveCrypto(e, id)}
                      className="cursor-pointer hover:text-slate-200"
                      size={24}
                    />
                  </td>
                </tr>
              ))}
            <tr className="text-white border-t">
              <td className="py-1"></td>
              <td className="py-1">${formatNumberWithCommas(priceAmount)}</td>
              <td className="py-1">{totalCoinAmount}</td>
              <td className="py-1">
                ${formatNumberWithCommas(totalPriceAmount)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <p>Портфель пустой, добавьте монеты, чтобы они здесь появились.</p>
        </div>
      )}
    </Modal>
  )
}
