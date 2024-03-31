import express, { Request, Response } from 'express'
import {
    Product,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../models/product'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const products: Product[] = await getAllProducts()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
})

// GET product by ID
router.get('/:id', async (req: Request, res: Response) => {
    const productId: number = parseInt(req.params.id)
    try {
        const product: Product | null = await getProductById(productId)
        if (!product) {
            res.status(404).json({ message: 'Product not found' })
            return
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
})

// Create a new product
router.post('/', async (req: Request, res: Response) => {
    const newProduct: Product = req.body as Product
    try {
        const productId: number = await createProduct(newProduct)
        res.status(201).json({ productId })
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
})

// Update an existing product
router.put('/:id', async (req: Request, res: Response) => {
    const productId: number = parseInt(req.params.id)
    const updatedProduct: Product = req.body as Product
    try {
        const success: boolean = await updateProduct(productId, updatedProduct)
        if (!success) {
            res.status(404).json({ message: 'Product not found' })
            return
        }
        res.json({ message: 'Product updated successfully' })
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
})

// Delete a product
router.delete('/:id', async (req: Request, res: Response) => {
    const productId: number = parseInt(req.params.id)
    try {
        const success: boolean = await deleteProduct(productId)
        if (!success) {
            res.status(404).json({ message: 'Product not found' })
            return
        }
        res.json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
})

export default router
