import { useGetCryptoCurrenciesListQuery } from 'src/api/crypto-currencies-list-api'
import { BRIEFCASE_LOCAL_STORAGE_KEY } from 'src/constants/local-storage-keys'
import { IBriefcase } from 'src/types'
import { useLocalStorage } from 'usehooks-ts'

export const useBriefcase = () => {
  // Briefcase from localStorage
  const [briefcase, _] = useLocalStorage<IBriefcase>(
    BRIEFCASE_LOCAL_STORAGE_KEY,
    {
      coins: [],
      amount: 0,
    },
  )

  if (!briefcase) {
    return {
      amount: 0,
      profit: 0,
      percent: 0,
    }
  }

  // Briefcase Coins Data from API
  const { data } = useGetCryptoCurrenciesListQuery({
    ids: briefcase?.coins.map((coin) => coin.id),
  })

  const amount = data?.reduce((prev, curr) => {
    const coinAmount = briefcase?.coins.find(
      (coin) => coin.id === curr.id,
    )?.amount
    return prev + curr.price * (coinAmount ?? 1)
  }, 0)
  const previousAmount = briefcase?.amount ?? 0
  const currentAmount = amount ?? 0
  const profit = previousAmount - currentAmount
  const percent = ((previousAmount - currentAmount) / currentAmount) * 100

  return {
    briefcase,
    amount: amount ?? 0,
    profit: profit ?? 0,
    percent: percent ?? 0,
  }
}
