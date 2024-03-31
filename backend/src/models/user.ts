import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import getConnection from '../config/db'

interface User {
    user_id?: number
    name: string
    email: string
    address?: string
    phone?: string
    password: string
    role: 'user' | 'admin'
}

interface UserRow extends RowDataPacket {
    user_id: number
    name: string
    email: string
    address: string | null
    phone: string | null
    password: string
    role: 'user' | 'admin'
}

async function createUser(user: User): Promise<number> {
    const { name, email, address, phone, password, role } = user
    const db = await getConnection()
    try {
        const [result] = await db.execute<ResultSetHeader>(
            'INSERT INTO users (name, email, address, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, address, phone, password, role]
        )
        return result.insertId as number
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
