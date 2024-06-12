import { TimeIntervalEnum } from 'src/enums'
import { CryptoCurrencyChartInterval } from './CryptoCurrencyChartInterval'

export const CryptoCurrencyChartIntervals = () => {
  const createIntervalButton = () => {
    const intervals = []
    for (const key in TimeIntervalEnum) {
      if (!isNaN(Number(key))) {
        continue
      }
      intervals.push(<CryptoCurrencyChartInterval key={key} title={key} />)
    }
    return intervals
  }

  return (
    <div className="flex flex-row justify-center sm:justify-end my-2">
      <div className="flex gap-2 p-1 bg-[#f0f1f6] rounded-xl overflow-x-auto sm:flex-nowrap">
        {createIntervalButton()}
      </div>
    </div>
  )
}
