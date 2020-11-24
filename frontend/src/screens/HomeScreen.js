import {Carousel } from 'react-bootstrap'
import HomeCategories from '../components/HomeCategories'
import { Container, Row, Col } from 'react-bootstrap';
import '../HomeScreen.css'


const HomeScreen = () => {


    return (      
       <div className="home"> 
            <div className="home__carousel">
                
                <Carousel  >
                    
                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel1.jpg" alt=""/>

                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel2.jpg" alt=""/>

                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel3.jpg" alt=""/>

                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel4.jpg" alt=""/>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel5.jpg" alt=""/>

                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel6.jpg" alt=""/>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel7.jpg" alt=""/>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img className="home__image " src="/images/Carousel8.jpg" alt=""/>

                    </Carousel.Item>
                    <Container className="home__rows" fluid>
                    
                    
                    <Row >
                <Col>
                </Col> 
                <Col xs={10}>
               <Row>
                <Col sm={6} md={4} lg={4} xl={3}><HomeCategories direct='/electronics' imageLink="/images/electronicsAmazon.jpg" />
                 </Col>
                <Col sm={6} md={4} lg={4} xl={3}><HomeCategories direct='/electronics' imageLink="/images/amazon2.png" />
                 
                </Col>
                <Col sm={6} md={4} lg={4} xl={3}><HomeCategories direct='/electronics' imageLink="/images/amazon3.jpg" />
                 
                </Col>
                <Col sm={6} md={4} lg={4} xl={3}><HomeCategories direct='/electronics' imageLink="/images/electronicsAmazon.jpg" />
                 
                </Col>
                </Row>
            

                </Col>

                <Col>
                </Col>

                 </Row>
                 
               
                    
                
               
                </Container>
                </Carousel>
                
            </div>
            
             
            

       </div> 
    )
}
export default HomeScreen
