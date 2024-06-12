import { IoMdArrowRoundBack } from 'react-icons/io'
import { LuStar } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components/Button'
import { CoinFullName } from './CoinFullName'

interface ICoinDetailsHeaderProps {
  id?: number
  name?: string
  symbol?: string
}

export const CoinDetailsHeader = (coin: ICoinDetailsHeaderProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-row justify-between items-center">
      <Button onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack size={24} />
      </Button>
      <CoinFullName {...coin} />
      <Button>
        <LuStar size={24} />
      </Button>
    </div>
  )
}
