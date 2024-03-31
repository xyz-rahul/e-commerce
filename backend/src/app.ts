import productRoutes from './routes/product'
import userRoutes from './routes/users'
import { expressServer as app } from './services/server'
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/product', productRoutes)
app.use('/user', userRoutes)

const PORT = 8000
app.listen(8000, () => console.log(`server listening on ${PORT}`))
