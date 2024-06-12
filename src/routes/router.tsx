import { createBrowserRouter } from 'react-router-dom'
import { CryptoCurrencyDetailsPage, HomePage } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/currencies/:id',
    element: <CryptoCurrencyDetailsPage />,
  },
])
