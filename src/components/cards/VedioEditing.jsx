import React from 'react'
import Card from 'react-bootstrap/Card';
import {BsCameraVideoFill} from 'react-icons/bs'



const VedioEditingCard = () => {
  return (

    <Card className='card-con'>
      <h1 className='service-logo'><BsCameraVideoFill/></h1>
      <Card.Body>
        <Card.Title>Vedio editing</Card.Title>
        <Card.Text>
        edit vedios using adobi montir
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
 


  )
}

export default VedioEditingCard