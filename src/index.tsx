import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactModal from 'react-modal'

import 'src/assets/styles/index.css'
import App from './App'

ReactModal.setAppElement('#root')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
