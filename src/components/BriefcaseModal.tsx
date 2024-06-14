import { useBriefcase } from 'src/hooks'
import { formatShortNumber } from 'src/utils'
import { Modal } from './Modal'

interface IBriefcaseModalProps {
  isOpen: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BriefcaseModal = ({ isOpen, onClose }: IBriefcaseModalProps) => {
  const { briefcase } = useBriefcase()

  return (
    <Modal
      title={`Портфель $(${formatShortNumber(briefcase?.amount)})`}
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}
