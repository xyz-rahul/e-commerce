import productRoutes from './routes/product'
import imagesRoutes from './routes/images'
import userRoutes from './routes/users'
import { expressServer as app } from './services/server'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/product', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/image', imagesRoutes)

const PORT = 8000
app.listen(8000, () => console.log(`server listening on ${PORT}`))
