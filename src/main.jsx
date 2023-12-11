import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'
import './app.scss'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-7xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
