import React from 'react'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactForm = () => {
  return (
    <div className='form-con'>
      <center>

      <Form.Group className="mb-3" >
    
    <Form.Control type="text" placeholder="Enter Your Name" />
    
  </Form.Group>
    
      <Form.Group className="mb-3" >
    
        <Form.Control type="email" placeholder="Enter Your email" />
        
      </Form.Group>

    <textarea placeholder='Type Your message' className='mb-3'/>
    </center>

      <button className='form-btn' type="submit">
        Send
      </button>
   


    </div>
  )
}

export default ContactForm