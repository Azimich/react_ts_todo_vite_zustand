import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './views/App'
import './views/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
