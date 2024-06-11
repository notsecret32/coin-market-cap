export interface IApiCoinGraph {
  time: {
    open: Date
    close: Date
    high: Date
    low: Date
  }
  price: {
    open: number
    close: number
    high: number
    low: number
    volume: number
    capitalization: number
    timestamp: Date
  }
}
