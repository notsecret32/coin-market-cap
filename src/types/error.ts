export interface IError {
  status: {
    errorCore: number
    errorMessage: string
    elapsed: number
    creditCount: number
    notice: string
  }
}
