import React, {useState} from 'react'
import { Form , Button, Col, Card , Container} from 'react-bootstrap'
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
            
            <Form onSubmit ={submitHandler}>
                <Card className='form__label'>
                <Container>
                <h1>Payment Method</h1>
                <Form.Group>
                    <Form.Label as='legend'> Select Method</Form.Label>
               

                    <Col>
                       <Form.Check type='radio' label='PayPal or Credit card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                    </Col>
                </Form.Group>
                </Container>



                </Card>
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