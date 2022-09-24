import express  from 'express'
import dotenv from 'dotenv'
import products from './data/Products.js'
import connectDB from './config/db.js'

const app = express()
dotenv.config()
connectDB()


//js router 
app.get('/api/products', (req, res) =>{
res.json(products)
})

app.get('/api/products/:id', (req, res) => { 
   const product = products.find((p)=>p._id === req.params.id);
   res.json(product);
})

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`run sucsessfuly ${PORT}`));