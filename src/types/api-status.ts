export interface IApiStatus {
  timestamp: Date
  errorCode: number
  errorMessage: string
  elapsed: number
  creditCount: number
  notice?: string
}
