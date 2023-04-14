import React from 'react'
import Card from 'react-bootstrap/Card';
import {TfiWrite} from 'react-icons/tfi'



const ContentWritingCard = () => {
  return (

    <Card className='card-con'>
      <h1 className='service-logo'><TfiWrite/></h1>
      <Card.Body>
        <Card.Title>Content Writing</Card.Title>
        <Card.Text>
           digital content & ticnical articles 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
 


  )
}

export default ContentWritingCard