import React from 'react'
import { Link } from 'react-router-dom'
import { Image,   Button , Card} from 'react-bootstrap'
import '../Categories.css'

const HomeCategories = (props) => {
    return (
        <div className="categories">
         
         {/* <Card className ='my-3 p-3 rounded'>
            <Link to={props.direct}>
                <Card.Img src= variant= 'top'/>
            </Link>
            <Card.Body>
                <Link to={`/electronics`}>
                    <Card.Title as='div'>
                        
                    </Card.Title>
                </Link>

                <Card.Text as='div'>

                
                </Card.Text>

            </Card.Body>
        </Card>
         */}
       

            <Card>
                <Link to={props.direct}>
                        <Image src={props.imageLink} fluid />   
                        <div className="centered"> <Button variant="outline-info"><h5>Info</h5></Button>{' '}</div>
                </Link>
           
                </Card>
        
            
        </div>
    )
}

export default HomeCategories;
