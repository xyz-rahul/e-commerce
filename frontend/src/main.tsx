import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Product from './pages/Product'
import LoginPage from './pages/Login'

import SignUp from './pages/SignUp'
import { AuthProvider } from './context/AuthContext'
import RequireAuth from './context/RequireAuth'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<Product />} />
            <Route element={<RequireAuth />}>
                <Route path="/sell" element={<Sell />} />
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)
