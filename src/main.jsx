import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Counter from './components/counter.jsx'
import PageNotFound from './components/notfound.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/Counter",element:<Counter />},
  {path:"*",element:<PageNotFound />},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
