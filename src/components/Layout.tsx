import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { handleApiError } from 'src/utils'
import { InfoBlock } from './InfoBlock'
import { NavBar } from './NavBar'

interface ILayoutProps {
  children: React.ReactNode
  error?: FetchBaseQueryError | SerializedError | undefined
  isLoading?: boolean
}

export const Layout = ({ children, error, isLoading }: ILayoutProps) => {
  if (isLoading) {
    return <InfoBlock text="Идет загрузка..." />
  }

  if (error) {
    return <InfoBlock text={handleApiError(error).message} />
  }

  return (
    <>
      <div className="w-screen border-b">
        <div className="container mx-auto py-3">
          <NavBar />
        </div>
      </div>

      <div className="container mx-auto flex flex-col">
        <main className="mx-4">{children}</main>
      </div>
    </>
  )
}
