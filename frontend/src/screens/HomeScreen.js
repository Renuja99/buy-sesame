import {Carousel } from 'react-bootstrap'
import HomeCategories from '../components/HomeCategories'
import { Container, Row, Col } from 'react-bootstrap';
import '../HomeScreen.css'


const HomeScreen = () => {


    return (      
       <div className="home"> 
            <div className="home__container">
                <Carousel>
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
            

                </Carousel>
                <Container>
                    <Row>
                    <Col sm={12} md={6} lg={6} xl={4}><HomeCategories direct='/electronics' imageLink="/images/electronics.png"/>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={4}><HomeCategories imageLink="/images/airpods.jpg" rounded/> </Col>
                    <Col sm={12} md={6} lg={6} xl={4}><HomeCategories /> </Col>
                    
                   </Row>
                <Row>
                
                <Col sm={12} md={6} lg={6} xl={6}> <HomeCategories /></Col>
                
                <Col sm={12} md={6} lg={6} xl={6}> <HomeCategories /></Col>

                     
                 </Row>
                <Row>
                <Col sm={12} md={6} lg={6} xl={4}><HomeCategories /></Col>
                <Col sm={12} md={6} lg={6} xl={4}><HomeCategories /></Col>
                <Col sm={12} md={6} lg={6} xl={4}><HomeCategories /></Col>
                 

                 </Row>
                 </Container>
            
            </div>
            
             
            

       </div> 
    )
}
export default HomeScreen
