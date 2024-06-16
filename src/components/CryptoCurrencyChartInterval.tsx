import { TimeIntervalEnum } from 'src/enums'
import { updateInterval } from 'src/redux/slices/time-interval-slice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'

interface ICryptoCurrencyChartIntervalProps {
  title: string
}

export const CryptoCurrencyChartInterval = ({
  title,
}: ICryptoCurrencyChartIntervalProps) => {
  const dispatch = useAppDispatch()
  const { interval } = useAppSelector((state) => state.timeIntervalSlice)

  return (
    <button
      className={`p-2 rounded-xl font-semibold text-sm text-[#787b96]hover:bg-white ${interval === title ? 'bg-white' : 'bg-transparent'}`}
      onClick={() =>
        dispatch(
          updateInterval({
            interval: TimeIntervalEnum[title as keyof typeof TimeIntervalEnum],
          }),
        )
      }
    >
      {title.toUpperCase()}
    </button>
  )
}
