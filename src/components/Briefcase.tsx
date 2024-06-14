import { useState } from 'react'
import { useBriefcase } from 'src/hooks'
import { formatShortNumber } from 'src/utils'
import { BriefcaseModal } from './BriefcaseModal'

export const Briefcase = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { amount, profit, percent } = useBriefcase()

  return (
    <>
      <div
        className="flex flex-row items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div>${formatShortNumber(amount) ?? 0}</div>
        <div>{formatShortNumber(profit) ?? 0}</div>
        <div>({formatShortNumber(percent) ?? 0}%)</div>
      </div>
      <BriefcaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
