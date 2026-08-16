import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx';
import Homes from './pages/Homes/Homes.jsx';
import Experiences from './pages/Experiences/Experiences.jsx';
import Services from './pages/Services/Services.jsx';
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/homes",
        element: <Homes />
      },
      {
        path: "/experiences",
        element: <Experiences />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
