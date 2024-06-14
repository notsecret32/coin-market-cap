import { ICryptoCurrency } from './crypto-currency'

export interface IBuyCryptoCurrency extends ICryptoCurrency {
  amount: number
  totalPrice: number
}
