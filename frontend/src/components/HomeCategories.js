import React from 'react'
import { Link } from 'react-router-dom'
import { Card} from 'react-bootstrap'
import '../Categories.css'

const HomeCategories = (props) => {
    return (
        <div className="categories">
         
        <Card bg='light' text='dark' className='customCard my-3 p-3 rounded' variant='light'>
            <Link to={props.direct}>
            <Card.Text text='dark'  as='div'>
                        <p className='categoryTitle'><h5><strong>Category</strong></h5></p>
             </Card.Text>
                <Card.Img src={props.imageLink} variant= 'top'/>
                
            </Link>
            <Card.Body>
                <Link to={`/electronics`}>
                    
                </Link>

                <Card.Text as='div'>

                
                </Card.Text>

            </Card.Body>
        </Card>
         
       

   
            
        </div>
    )
}

export default HomeCategories;
