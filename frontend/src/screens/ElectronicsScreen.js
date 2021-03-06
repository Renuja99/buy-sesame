import React, {  useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import '../OtherScreens.css'

const ElectronicsScreen = () => {

   const dispatch = useDispatch()

   const productList = useSelector(state => state.productList)
   const{ loading , error, products } = productList

    useEffect(() =>{
       
       dispatch(listProducts())  //fires a response to the backend..
    
    },[dispatch])
    return (
        <>
        <div className="space"><h1>Latest products</h1></div>
          
    {loading ? ( <Loader />) : error ? <Message variant = 'danger'>{error}</Message>:  
          <Row >
              {products.map((product) =>(
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                  </Col>
              ))} 
          </Row>}
        
            
        </>
    )
}
export default ElectronicsScreen