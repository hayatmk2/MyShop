import React, { useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts } from '../actions/productActions'
//import axios from 'axios'

 //const HomeScreen = () => {
  //const [products, setProducts] = useState([]) //local state 
  // useEffect(() =>{
  //  const fetchProducts = async() =>{
  //  const {data} =await axios.get('/api/products')
  //  setProducts(data) 
  //   }
  //   fetchProducts()
  // })
  const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
           
  return (
    <>
    <h1>What's in the shop</h1>
    {loading ? (
    <h2>loading...</h2>
    ) :error ? (
    <h3>{error}</h3>
    ): ( <Row>
        {products.map ((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
    </Row>)}
    </>
  )
}

export default HomeScreen