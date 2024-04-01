import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import getConnection from '../config/db'

interface Product {
    product_id?: number
    name: string
    description: string
    price: number
    stock_quantity: number
    category: string
    thumbnail_url: string
    user_id: number
}

interface ProductRow extends RowDataPacket {
    product_id: number
    name: string
    description: string
    price: number
    stock_quantity: number
    category: string
    thumbnail_url: string
    user_id: number
}

async function getAllProducts(page: string, size: string): Promise<Product[]> {
    const db = await getConnection()

    //mysql only accepts string
    const offset = ((parseInt(page) - 1) * parseInt(size)).toString()
    const limit = parseInt(size).toString()
    try {
        const [rows]: [ProductRow[], unknown] = await db.execute(
            'SELECT * FROM products LIMIT ? OFFSET ?',
            [limit, offset]
        )
        return rows
    } catch (error) {
        console.log(error)
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
    const {
        name,
        description,
        price,
        stock_quantity,
        category,
        thumbnail_url,
        user_id,
    } = product
    const db = await getConnection()
    try {
        const params = [
            name,
            description || null,
            price || null,
            stock_quantity || null,
            category || null,
            thumbnail_url || null,
            user_id,
        ]
        const [result] = await db.execute<ResultSetHeader>(
            'INSERT INTO products (name, description, price, stock_quantity, category, thumbnail_url, user_id) VALUES (?, ?, ?, ?, ?,?, ?)',
            params
        )
        return result.insertId as number
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
