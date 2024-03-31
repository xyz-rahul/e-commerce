import express, { Request, Response } from 'express'
import multer from 'multer'
import { FileSizeError, uploadImageToFirebase } from '../services/images'
const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post(
    '/upload',
    upload.single('product_image'),
    async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No image uploaded' })
            }
            const file = req.file as Express.Multer.File
            const url = await uploadImageToFirebase(file)
            res.status(201).json({ url })
        } catch (error: any | FileSizeError) {
            if (error instanceof FileSizeError) {
                return res.status(400).json({ message: error.message })
            } else {
                return res
                    .status(500)
                    .json({ message: 'Unexpected error occurred' })
            }
        }
    }
)

router.get('/', async function (req: Request, res: Response) {
    res.send('images home')
})

export default router
