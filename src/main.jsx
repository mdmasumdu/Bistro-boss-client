import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedroute from './Route/Route.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider>
<AuthProvider>
<div className='max-w-screen-xl mx-auto'>
<RouterProvider router={mycreatedroute}></RouterProvider>
</div>
</AuthProvider>
</HelmetProvider>
  </React.StrictMode>,
)
