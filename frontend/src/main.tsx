import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Product from './pages/Product'
import LoginPage from './pages/Login'

import createStore from 'react-auth-kit/createStore'
const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
})
import AuthProvider from 'react-auth-kit'
import SignUp from './pages/SignUp'

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
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SignUp />,
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
        <AuthProvider store={store}>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)
