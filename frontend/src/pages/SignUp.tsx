import axios from 'axios'
import { FormEvent, useState } from 'react'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const signIn = useSignIn()
    const navigate = useNavigate()

    const [submitPending, setSubmitPending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [userResponse, setUserResponse] = useState<{
        name: string
        email: string
        password: string
    }>({ name: '', email: '', password: '' })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setSubmitPending(true)
            const { name, email, password } = userResponse
            const response = await axios.post('/api/user/signup', {
                name,
                email,
                password,
            })
            const { userId, token } = response.data as {
                userId: string
                token: string
            }
            if (
                signIn({
                    auth: {
                        token: token,
                        type: 'Bearer',
                    },
                    userState: {
                        name: 'React User',
                        uid: userId,
                    },
                })
            ) {
                navigate('/')
            } else {
                console.log('not')
                //Throw error
            }

            setSubmitPending(false)
        } catch (error: any) {
            setError('Error uploading product' + error.message)
            console.error('Error uploading product:', error)
        } finally {
            setSubmitPending(false)
        }
    }
    return (
        <>
            <div className="flex h-screen">
                <div className="w-full bg-gray-100  flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                            SignUp
                        </h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                            with all the goodies
                        </h1>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p></p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                    onChange={(e) =>
                                        setUserResponse((prev) => {
                                            return {
                                                ...prev,
                                                name: e.target.value,
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                    onChange={(e) =>
                                        setUserResponse((prev) => {
                                            return {
                                                ...prev,
                                                email: e.target.value,
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                    onChange={(e) =>
                                        setUserResponse((prev) => {
                                            return {
                                                ...prev,
                                                password: e.target.value,
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                >
                                    sign up
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>
                                Create an account?
                                <a
                                    href="/signup"
                                    className="text-black hover:underline"
                                >
                                    Click here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
