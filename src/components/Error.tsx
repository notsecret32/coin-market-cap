import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { getApiErrorMessage } from 'src/utils/get-api-error-message'

interface IErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined
}

export const Error = ({ error }: IErrorProps) => {
  return (
    <div className="bg-[#ebecf1] text-center py-32 mx-4 lg:mx-32 rounded-xl m-auto">
      <h1 className="font-semibold text-2xl">
        {getApiErrorMessage({ error })}
      </h1>
    </div>
  )
}
