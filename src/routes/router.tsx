import { createBrowserRouter } from 'react-router-dom'
import { CryptoCurrenciesListPage, CryptoCurrencyDetailsPage } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CryptoCurrenciesListPage />,
  },
  {
    path: '/currencies/:id',
    element: <CryptoCurrencyDetailsPage />,
  },
])
