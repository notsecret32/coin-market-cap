import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface IFetchBaseQueryError {
  status: {
    error_code: number
    error_message: string
  }
}

interface IErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined
}

export const getApiErrorMessage = ({ error }: IErrorProps) => {
  if (!error) {
    return 'Произошла неизвестная ошибка'
  }

  if ('status' in error) {
    const errorData = error.data as IFetchBaseQueryError | undefined

    return errorData?.status
      ? `Ошибка ${errorData.status.error_code}: ${errorData.status.error_message}`
      : 'Произошла неизвестная ошибка'
  }

  if ('message' in error) {
    return `Ошибка: ${error.message}`
  }

  return 'Произошла неизвестная ошибка'
}
