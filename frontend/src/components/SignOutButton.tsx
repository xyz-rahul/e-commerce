import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { useNavigate } from 'react-router-dom'

export default function SignOutButton() {
    const signOut = useSignOut()
    const navigate = useNavigate()

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
