import express, { Request, Response } from 'express'
const router = express.Router()
router.get('/', async function (req: Request, res: Response) {
    res.send('user home')
})

export default router

