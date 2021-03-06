import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import './bootstrap.min.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import ElectronicsScreen from './screens/ElectronicsScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      
      
      <main className='py-3' >
      
        <Route path='/' component ={HomeScreen} exact/>
      <Container>
        <Route path='/shipping' component={ShippingScreen}/>
        <Route path='/placeorder' component={PlaceOrderScreen}/>
        <Route path='/payment' component={PaymentScreen}/>
        <Route path = '/login' component={LoginScreen} />
        <Route path = '/register' component={RegisterScreen} />
        <Route path = '/profile' component={ProfileScreen} />
        <Route path='/electronics' component ={ElectronicsScreen}/>
        <Route path='/product/:id' component ={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
      </Container>
        
      </main>
      
      <Footer />
    </Router>
    

  );
}

export default App;
