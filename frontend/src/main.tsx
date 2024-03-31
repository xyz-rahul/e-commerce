import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Product from './pages/Product'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/sell',
                element: <Sell />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
        ],
    },
    {
        path: 'about',
        element: <div>About</div>,
    },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
