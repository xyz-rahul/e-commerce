import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import getConnection from '../config/db'

interface User {
    user_id?: string
    name: string
    email: string
    address?: string
    phone?: string
    password: string
    role?: 'user' | 'admin'
}

interface UserRow extends RowDataPacket {
    user_id: string
    name: string
    email: string
    address: string | null
    phone: string | null
    password: string
    role: 'user' | 'admin'
}

async function createUser(user: User): Promise<string> {
    const { name, email, address, phone, password, role } = user
    const db = await getConnection()
    try {
        const params = [
            name,
            email,
            address || null,
            phone || null,
            password,
            role || null,
        ]

        const [result] = await db.execute<ResultSetHeader>(
            'INSERT INTO users (name, email, address, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)',
            params
        )
        return result.insertId.toString() as string
    } catch (error) {
        throw new Error(`Error creating user: ${(error as Error).message}`)
    }
}

async function getUserByEmail(email: string): Promise<User | null> {
    const db = await getConnection()
    try {
        const [rows]: [UserRow[], unknown] = await db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )
        return rows.length ? (rows[0] as User) : null
    } catch (error) {
        throw new Error(
            `Error fetching user by email: ${(error as Error).message}`
        )
    }
}

export { User, createUser, getUserByEmail }
