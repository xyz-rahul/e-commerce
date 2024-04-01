import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignOutButton() {
    const navigate = useNavigate()

    const { signOut } = useAuth()
    return (
        <button
            className="bg-blue-500 text-white font-semibold text-md p-2 rounded-md "
            onClick={() => {
                signOut()
                navigate('/login')
            }}
        >
            Sign Out
        </button>
    )
}
