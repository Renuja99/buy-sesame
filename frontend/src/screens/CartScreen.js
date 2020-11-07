import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({match, location, history}) => {
    
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
     

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(()=>{
        if(productId){

            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        history.push('login?redirect=shipping')
    }


    const checkoutHandler = () =>{

        console.log('checkout')
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go back </Link>
                </Message>: (
                    <ListGroup variant ='flush'>
                        {cartItems.map(item =>(
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/$(item.product)`}>{item.name}</Link>
                                    </Col>
                        <Col md={2}> ${item.price}</Col>
                        <Col md={2}>
                    <Form.Control as='select' value={item.qty} onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value)))}>
                        {
                            [...Array(item.countInStock).keys()].map(x => (
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))
                        }
                    </Form.Control>
                        </Col>
                        <Col md={2}>
                            <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4><strong>Subtotal ({cartItems.reduce((acc, item)=>acc + item.qty,0) }) items</strong></h4>
                            ${cartItems.reduce((acc, item)=> acc+ item.qty * item.price, 0 ).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Button type='button' className= 'btn-block' disabled={cartItems.length ===0 } onClick={checkoutHandler}>
                            Proceed to Checkout
                        </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen

// useEffect is where we want to dispatch addToCart
// We bring in useDispatch and useSelector because we are dealing with our redux state
//useSelector is used to display data from the Redux store. Can be demonstrated using console.log(useSelector: cart)