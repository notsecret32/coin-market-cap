import { IApiCoinGraph } from './api-coin-graph'

export interface IApiCoinGraphData {
  id: number
  name: string
  symbol: string
  graph: IApiCoinGraph[]
}
