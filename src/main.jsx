import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import AuthProviders from './providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
         <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
