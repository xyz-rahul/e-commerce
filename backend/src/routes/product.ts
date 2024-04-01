import express, { Request, Response } from 'express'
import {
    Product,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../models/product'
import multer from 'multer'
import { FileSizeError, uploadImageToFirebase } from '../services/images'

const router = express.Router()
const storage = multer.memoryStorage() // Store files in memory
const upload = multer({ storage })

router.get('/', async (req: Request, res: Response) => {
    try {
        const products: Product[] = await getAllProducts()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
})

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

router.post(
    '/',
    upload.single('product_image'),
    async (req: Request, res: Response) => {
        const newProduct: Product = req.body as Product

        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' })
        }
        const file = req.file as Express.Multer.File
        const url = await uploadImageToFirebase(file)
        try {
            const product = {
                ...newProduct,
                thumbnail_url: url,
                user_id: 1,
            } as Product
            const productId: number = await createProduct(product)
            res.status(201).json({ productId })
        } catch (error: any | FileSizeError) {
            console.log(error)
            if (error instanceof FileSizeError) {
                return res.status(400).json({ message: error.message })
            } else {
                console.log(error)
                return res
                    .status(500)
                    .json({ message: 'Unexpected error occurred' })
            }
        }
    }
)

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
