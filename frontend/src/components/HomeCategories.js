import React from 'react'
import { Link } from 'react-router-dom'
import { Card} from 'react-bootstrap'
import '../Categories.css'

const HomeCategories = (props) => {
    return (
        <div className="categories">
         
        <Card className ='my-3 p-3 rounded' variant='light'>
            <Link to={props.direct}>
            <Card.Text><h5><strong>Card Title</strong></h5>  </Card.Text>
                <Card.Img src={props.imageLink} variant= 'top'/>
                
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
         
       

   
            
        </div>
    )
}

export default HomeCategories;
