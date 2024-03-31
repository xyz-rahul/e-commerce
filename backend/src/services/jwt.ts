import jwt from 'jsonwebtoken'

const secretKey = 'your_secret_key'

export function generateUserToken(payload: {
    userId: string
    email: string
}): string {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' })
}

export function verifyUserToken(token: string) {
    const decoded = jwt.verify(token, secretKey) as {
        userId: string
        email: string
    }
    return decoded
}
