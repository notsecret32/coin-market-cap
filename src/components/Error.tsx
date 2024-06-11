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

export const Error = ({ error }: IErrorProps) => {
  const getErrorMessage = (): string => {
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

  return (
    <div className="bg-[#ebecf1] text-center py-32 mx-4 lg:mx-32 rounded-xl m-auto">
      <h1 className="font-semibold text-2xl">{getErrorMessage()}</h1>
    </div>
  )
}
