import { useState } from 'react'
import { useGetCryptoCurrenciesListQuery } from 'src/api/crypto-currencies-list-api'
import { useBriefcase } from 'src/hooks'
import { formatShortNumber } from 'src/utils'
import { BriefcaseModal } from './BriefcaseModal'

export const Briefcase = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { briefcase } = useBriefcase()
  const { data: freshCoins } = useGetCryptoCurrenciesListQuery({
    ids: briefcase?.coins.map((coin) => coin.id),
  })

  const freshCoinsTotalPrice = freshCoins?.reduce((prev, curr) => {
    const coinAmount = briefcase?.coins.find(
      (coin) => coin.id === curr.id,
    )?.amount
    return prev + curr.price * (coinAmount ?? 0)
  }, 0)

  const briefcaseAmount = briefcase?.amount ?? 0
  const freshCoinsAmount = freshCoinsTotalPrice ?? 0

  const profit = briefcaseAmount - (freshCoinsTotalPrice ?? 0)
  const percent =
    ((briefcaseAmount - freshCoinsAmount) / freshCoinsAmount) * 100

  return (
    <>
      <div
        className="flex flex-row items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div>${formatShortNumber(briefcase?.amount)}</div>
        <div>{formatShortNumber(profit)}</div>
        <div>({formatShortNumber(percent)}%)</div>
      </div>
      <BriefcaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
