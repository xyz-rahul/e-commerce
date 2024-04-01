import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function RequireAuth() {
    const { user } = useAuth()
    const location = useLocation()

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
