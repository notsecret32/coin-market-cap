import { IBuyCryptoCurrency } from './buy-crypto-currency'

export interface IBriefcase {
  coins: IBuyCryptoCurrency[]
  amount: number
}
