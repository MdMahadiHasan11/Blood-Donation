import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import AuthProvider from './shareComponent/provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
