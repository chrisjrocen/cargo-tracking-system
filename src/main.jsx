import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from "./components/About.jsx"
import Search from "./components/Search.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/search",
    element: <Search/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
