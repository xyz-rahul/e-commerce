import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import getConnection from '../config/db'

interface Product {
    product_id?: number
    name: string
    description: string
    price: number
    stock_quantity: number
    category: string
    user_id: number
}

interface ProductRow extends RowDataPacket {
    product_id: number
    name: string
    description: string
    price: number
    stock_quantity: number
    category: string
    user_id: number
}

async function getAllProducts(): Promise<Product[]> {
    const db = await getConnection()
    try {
        const [rows]: [ProductRow[], unknown] = await db.execute(
            'SELECT * FROM products'
        )
        return rows
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`)
    }
}

async function getProductById(productId: number): Promise<Product | null> {
    const db = await getConnection()
    try {
        const [rows]: [ProductRow[], unknown] = await db.execute(
            'SELECT * FROM products WHERE product_id = ?',
            [productId]
        )
        return rows.length ? rows[0] : null
    } catch (error) {
        throw new Error(`Error fetching product by ID: ${error}`)
    }
}

async function createProduct(product: Product): Promise<number> {
    const { name, description, price, stock_quantity, category, user_id } =
        product
    const db = await getConnection()
    try {
        const [result] = await db.execute<ResultSetHeader[]>(
            'INSERT INTO products (name, description, price, stock_quantity, category, user_id) VALUES (?, ?, ?, ?, ?, ?)',
            [name, description, price, stock_quantity, category, user_id]
        )
        return result[0].insertId as number
    } catch (error) {
        throw new Error(`Error creating product: ${error}`)
    }
}

async function updateProduct(
    productId: number,
    product: Product
): Promise<boolean> {
    const { name, description, price, stock_quantity, category } = product
    const db = await getConnection()
    try {
        await db.execute(
            'UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ?, category = ? WHERE product_id = ?',
            [name, description, price, stock_quantity, category, productId]
        )
        return true
    } catch (error) {
        throw new Error(`Error updating product: ${error}`)
    }
}

async function deleteProduct(productId: number): Promise<boolean> {
    const db = await getConnection()
    try {
        await db.execute('DELETE FROM products WHERE product_id = ?', [
            productId,
        ])
        return true
    } catch (error) {
        throw new Error(`Error deleting product: ${error}`)
    }
}

export {
    Product,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
