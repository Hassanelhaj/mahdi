import React from 'react'
import Card from 'react-bootstrap/Card';
import {RiComputerFill} from 'react-icons/ri'



const DesktopDevCard = () => {
  return (

    <Card className='card-con'>
      <h1 className='service-logo'><RiComputerFill/></h1>
      <Card.Body>
        <Card.Title>desktop development</Card.Title>
        <Card.Text>
        build desktop applications using c#
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
 


  )
}

export default DesktopDevCard