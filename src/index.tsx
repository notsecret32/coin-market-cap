import React from 'react'
import ReactDOM from 'react-dom/client'

import 'src/assets/styles/index.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)