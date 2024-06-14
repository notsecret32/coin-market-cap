import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface IHandleApiErrorReturn {
  isError: boolean
  message: string
}

export const handleApiError = (
  error: FetchBaseQueryError | SerializedError | undefined,
): IHandleApiErrorReturn => {
  if (error === undefined) {
    return {
      isError: false,
      message: '',
    }
  }

  // FetchBaseQueryError
  if ('status' in error && 'data' in error) {
    console.error(error)

    return {
      isError: true,
      message: 'Произошла ошибка получения данных',
    }
  }

  // SerializedError
  if ('name' in error && 'message' in error) {
    console.error(error)

    return {
      isError: true,
      message: 'Произошла ошибка сериализации данных',
    }
  }

  console.error(error)

  return {
    isError: true,
    message: 'Произошла неизвестная ошибка',
  }
}
