import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { ICryptoCurrencyChartPoint } from 'src/types'

interface ICryptoCurrencyChartProps {
  points: ICryptoCurrencyChartPoint[] | undefined
}

export const CryptoCurrencyChart = ({ points }: ICryptoCurrencyChartProps) => {
  return (
    <LineChart width={600} height={300} data={points}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  )
}
