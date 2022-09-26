import express  from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'



const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.json({'msg': 'Hello World'})
  })

app.use('/api/products', productRoutes)
app.use(errorHandler)
app.use(notFound)

//js router 
// app.get('/api/products', (req, res) =>{
// res.json(products)
// })

// app.get('/api/products/:id', (req, res) => { 
//    const product = products.find((p)=>p._id === req.params.id);
//    res.json(product);
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`run sucsessfuly ${PORT}`));