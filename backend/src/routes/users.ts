import express, { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User, createUser, getUserByEmail } from '../models/user'
import { generateUserToken } from '../services/jwt'

const router = express.Router()
const secretKey = 'secretKey'
router.post('/signup', async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body

        const existingUser = await getUserByEmail(email)
        if (existingUser) {
            return res
                .status(400)
                .json({ message: 'User with this email already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const userId = await createUser({
            name,
            email,
            password: hashedPassword,
        })
        const token = generateUserToken({ userId, email })

        res.cookie('jwt', token, { httpOnly: true })

        res.status(201).json({ userId, token })
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await getUserByEmail(email)
        if (!user) {
            return res
                .status(401)
                .json({ message: 'Invalid email or password' })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res
                .status(401)
                .json({ message: 'Invalid email or password' })
        }

        const token = generateUserToken({
            userId: user.user_id!,
            email: user.email,
        })

        res.cookie('jwt', token, { httpOnly: true })

        res.status(200).json({ token })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
async function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.jwt

    if (!token) {
        return res
            .status(401)
            .json({ message: 'Unauthorized: No token provided' })
    }

    const decoded = jwt.verify(token, secretKey) as {
        userId: number
        email: string
    }

    next()
}

export default router
