import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { handleApiError } from 'src/utils'

interface IErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined
}

export const Error = ({ error }: IErrorProps) => {
  const { message } = handleApiError(error)

  return (
    <div className="bg-[#ebecf1] text-center py-32 mx-4 lg:mx-32 rounded-xl m-auto">
      <h1 className="font-semibold text-2xl">{message}</h1>
    </div>
  )
}
