import '@/entrypoints/style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>

    </React.StrictMode>,
  )
}
