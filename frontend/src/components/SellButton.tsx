import { useNavigate } from 'react-router-dom'

export default function SellButton() {
    const navigate = useNavigate()

    return (
        <button
            className="bg-green-700 text-white font-medium text-md px-4 p-2 rounded-md "
            onClick={() => navigate('/sell')}
        >
            Sell
        </button>
    )
}
