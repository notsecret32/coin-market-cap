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
  // Redux
  const dispatch = useAppDispatch()

  // Hooks
  const { briefcase } = useBriefcase()

  // Methods
  const handleRemoveCrypto = (e: React.MouseEvent<SVGElement>, id: string) => {
    e.preventDefault()
    dispatch(removeCryptoFromBriefcase({ id }))
  }

  // Statistics
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
        <div className="overflow-x-auto lg:overflow-x-visible">
          <table className="w-full ">
            <thead>
              <tr className="text-white">
                <th className="text-md lg:text-lg text-start px-1">Название</th>
                <th className="text-md lg:text-lg text-start px-1">Цена</th>
                <th className="text-md lg:text-lg text-start px-1">Кол-во</th>
                <th className="text-md lg:text-lg text-start px-1">
                  Общая цена
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* Briefcase Coins */}
              {briefcase.coins
                .sort((a, b) => b.price - a.price)
                .map(({ id, name, amount, price, totalPrice }) => (
                  <tr key={id}>
                    <td className="py-1 text-md lg:text-lg px-1">{name}</td>
                    <td className="py-1 text-md lg:text-lg px-1">
                      ${formatNumberWithCommas(price)}
                    </td>
                    <td className="py-1 text-md lg:text-lg px-1">{amount}</td>
                    <td className="py-1 text-md lg:text-lg px-1">
                      ${formatNumberWithCommas(totalPrice)}
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

              {/* Briefcase Statistics */}
              <tr className="text-white border-t">
                <td className="py-1 text-md lg:text-lg px-1"></td>
                <td className="py-1 text-md lg:text-lg px-1">
                  ${formatNumberWithCommas(priceAmount)}
                </td>
                <td className="py-1 text-md lg:text-lg px-1">
                  {totalCoinAmount}
                </td>
                <td className="py-1 text-md lg:text-lg px-1">
                  ${formatNumberWithCommas(totalPriceAmount)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p>Портфель пустой, добавьте монеты, чтобы они здесь появились.</p>
        </div>
      )}
    </Modal>
  )
}
