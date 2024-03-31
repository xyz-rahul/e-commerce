import productRoutes from './routes/product'
import imagesRoutes from './routes/images'
import userRoutes from './routes/users'
import { expressServer as app } from './services/server'
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/product', productRoutes)
app.use('/user', userRoutes)
app.use('/image', imagesRoutes)

const PORT = 8000
app.listen(8000, () => console.log(`server listening on ${PORT}`))
