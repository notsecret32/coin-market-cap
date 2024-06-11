import { useParams } from 'react-router-dom'

export const CoinDetailsPage = () => {
  const { slug } = useParams()

  return <div className="container mx-auto">{slug}</div>
}
