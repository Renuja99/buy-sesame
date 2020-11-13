import React, {useState} from 'react'
import { Form , Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import '../OtherScreens.css'



const PaymentScreen = ({history}) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler =(e) =>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <div className="space">
        <FormContainer >
            <h1>Payment Method</h1>
            <Form onSubmit ={submitHandler}>
                
                <Form.Group>
                    <Form.Label as='legend'> Select Method</Form.Label>
               

                    <Col>
                       <Form.Check type='radio' label='PayPal or Credit card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
                
            </Form>
            <CheckoutSteps step1 step2 step3/>
        </FormContainer>
        
        </div>
    )
}

export default PaymentScreen