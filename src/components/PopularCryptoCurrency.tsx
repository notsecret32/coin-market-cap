import { formatShortNumber } from 'src/utils'

interface IPopularCryptoCurrency {
  symbol: string
  price: number
}

export const PopularCryptoCurrency = ({
  symbol,
  price,
}: IPopularCryptoCurrency) => {
  return (
    <div className="flex flex-row items-end gap-1">
      <h1 className="font-inter font-medium text-xs md:text-sm text-[#85879f]">
        {symbol}
      </h1>
      <h2 className="text-sm md:text-base">${formatShortNumber(price)}</h2>
    </div>
  )
}
