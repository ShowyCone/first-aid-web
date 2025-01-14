import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Introduction from './components/Introduction'
import Menu from './components/Menu'
import Learn from './components/Learn'
import QuickConsult from './components/QuickConsult'
import Class from './components/Class'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Introduction />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/learn',
    element: <Learn />,
  },
  {
    path: '/quick-consult',
    element: <QuickConsult />,
  },
  {
    path: '/class/:id',
    element: <Class />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
