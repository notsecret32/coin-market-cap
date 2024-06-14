import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ICryptoCurrencyChartPoint } from 'src/types'
import { formatNumberWithCommas, formatShortNumber } from 'src/utils'

interface ICryptoCurrencyChartProps {
  points: ICryptoCurrencyChartPoint[] | undefined
}

export const CryptoCurrencyChart = ({ points }: ICryptoCurrencyChartProps) => {
  const getMaxAndMin = (points: ICryptoCurrencyChartPoint[] | undefined) => {
    if (!points) {
      return { max: 0, min: 0 }
    }

    let maxPrice = -Infinity
    let minPrice = Infinity

    for (let i = 0; i < points.length; i++) {
      const { price } = points[i]
      if (price > maxPrice) {
        maxPrice = price
      }
      if (price < minPrice) {
        minPrice = price
      }
    }

    return { max: maxPrice, min: minPrice }
  }

  const { max, min } = getMaxAndMin(points)

  const offset = (max - min) * 0.1

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={points}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#77d58b" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#77d58b" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="price" stroke="#77d58b" fill="#d8f3dd" />

        <XAxis
          className="font-inter text-sm"
          dataKey="date"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          className="font-inter text-sm"
          dataKey="price"
          tickCount={8}
          axisLine={false}
          tickLine={false}
          tickFormatter={(number) => `$${formatShortNumber(number)}`}
          domain={[(_: number) => min - offset, (_: number) => max + offset]}
        />

        <Tooltip formatter={(value) => `$${formatNumberWithCommas(+value)}`} />

        <CartesianGrid opacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
