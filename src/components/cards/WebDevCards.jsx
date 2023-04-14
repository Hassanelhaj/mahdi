import React from 'react'
import Card from 'react-bootstrap/Card';
import {BiWorld} from 'react-icons/bi'


const WebDevCard = () => {
  return (

    <Card className='card-con'>
      <h1 className='service-logo'><BiWorld/></h1>
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Card.Text>
          build apis using asp.netcore
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
 


  )
}

export default WebDevCard