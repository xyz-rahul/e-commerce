import { useNavigate } from 'react-router-dom'

export default function SignInButton() {
    const navigate = useNavigate()

    return (
        <button
            className="bg-blue-500 text-white font-semibold text-md p-2 rounded-md "
            onClick={() => navigate('/login')}
        >
            Sign In
        </button>
    )
}
