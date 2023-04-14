import React from 'react'
import SubTitle from '../SubTitle'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <div className='mt-5 contact-wrapper' >
        <SubTitle title ={"Contact Me"}/>
        <ContactForm/>
    </div>
  )
}

export default ContactMe