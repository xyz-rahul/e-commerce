import axios from 'axios'
import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from 'react'

interface User {
    userId: number
}

interface AuthContextType {
    user: User | null
    accessToken: string | null
    signInWithEmailAndPassword: (email: string, password: string) => void
    signUpWithNameAndEmailAndPassword: (
        name: string,
        email: string,
        password: string
    ) => void
    setUser: (user: User | null) => void
    setAccessToken: (accessToken: string | null) => void
    signOut: () => {}
    isAuthenticated: () => boolean
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    accessToken: null,
    signInWithEmailAndPassword: () => {},
    signUpWithNameAndEmailAndPassword: () => {},
    setUser: () => {},
    setAccessToken: () => {},
    signOut: () => {},
    isAuthenticated: () => boolean,
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [accessToken, setAccessToken] = useState<string | null>(null)

    async function signInWithEmailAndPassword(email: string, password: string) {
        const response = await axios.post('/api/user/login', {
            email,
            password,
        })

        const { userId, token } = response.data as {
            userId: string
            token: string
        }

        setUser({ userId })
        setAccessToken(token)
    }

    async function signUpWithNameAndEmailAndPassword(
        name: string,
        email: string,
        password: string
    ) {
        const response = await axios.post('/api/user/signup', {
            name,
            email,
            password,
        })
        const { userId, token } = response.data as {
            userId: string
            token: string
        }
        setUser({ userId })
        setAccessToken(token)
    }

    function signOut() {
        axios.get('/api/user/logout')
        setUser(null)
        setAccessToken(null)
    }

    function isAuthenticated() {
        if (user && accessToken) return true
        return false
    }

    useEffect(() => {
        if (!user) {
            axios
                .get('/api/user/auth')
                .then((response) => {
                    if (response.status === 200) {
                        const { userId, token } = response.data
                        setUser({ userId })
                        setAccessToken(token)
                    }
                })
                .catch((error) => {
                    console.error('Error fetching authentication data:', error)
                })
        }
    }, [user])

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                setUser,
                setAccessToken,
                signInWithEmailAndPassword,
                signUpWithNameAndEmailAndPassword,
                signOut,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export const useAuth = () => useContext(AuthContext)
