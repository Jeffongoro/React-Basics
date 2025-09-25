import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Counter from './components/counter.jsx'
import PageNotFound from './components/notfound.jsx'
import Dashboard from './components/dashboard.jsx'
import ExampleComponent from './components/example.jsx'
import Count from './components/count.jsx'


const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/Counter",element:<Counter />},
  {path:"*",element:<PageNotFound />},
  {path:"/dashboard",element:<Dashboard />},
  // {path:"/dashboard/:id",element:<DashboardItems />},
  {path:"/Example",element:<ExampleComponent />},
    {path:"/Count",element:<Count />},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
