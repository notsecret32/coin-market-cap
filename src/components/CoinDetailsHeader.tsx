import { IoMdArrowRoundBack } from 'react-icons/io'
import { LuStar } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components/Button'
import { CoinBudge } from 'src/components/CoinBadge'

interface ICoinDetailsHeaderProps {
  id?: string
  name?: string
  symbol?: string
  imageUrl?: string
}

export const CoinDetailsHeader = (coin: ICoinDetailsHeaderProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-row justify-between items-center">
      <Button onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack size={24} />
      </Button>
      <CoinBudge {...coin} />
      <Button>
        <LuStar size={24} />
      </Button>
    </div>
  )
}
