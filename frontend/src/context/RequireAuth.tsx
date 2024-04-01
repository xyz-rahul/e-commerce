import { ReactNode, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './AuthContext'

export default function RequireAuth({ children }: { children: ReactNode }) {
    const { user, setUser, setAccessToken } = useAuth()
    const location = useLocation()

    // useEffect(() => {
    //     console.log('xx1')
    //     if (!user) {
    //         axios
    //             .get('/api/user/auth')
    //             .then((response) => {
    //                 console.log('cc')
    //                 if (response.status === 200) {
    //                     const { userId, token } = response.data
    //                     setUser({ userId })
    //                     setAccessToken(token)
    //                     console.log('aa')
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching authentication data:', error)
    //                 if (error.response && error.response.status === 401) {
    //                     console.log('bb')
    //                     window.location.replace('/login')
    //                 }
    //             })
    //     }
    //     console.log('xx2')
    // }, [location.pathname, user])

    return (
        <>
            {user ? (
                <Outlet />
            ) : (
                <Navigate to={'/login'} state={{ from: location }} replace />
            )}
        </>
    )
}
