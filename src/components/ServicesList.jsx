import React from 'react'
// import WritingCard from './cards/WritingCard'
// import WebDevCard from './cards/WebDevCard'
// import VedioEditingCard from './cards/VedioEditingCard'
import DesktopDevCard from './cards/DesktopDevCard'
import { Container } from 'react-bootstrap'
import ContentWritingCard from './cards/ContentWritingCard'
import VedioEditingCard from './cards/VedioEditing'
import WebDevCard from './cards/WebDevCards'

const ServicesList = () => {
  return (
    <Container className='flex-row mb-3' id='services'>
   
        <ContentWritingCard/>
        <WebDevCard/>
        <VedioEditingCard/>
        <DesktopDevCard/>

    </Container>
  )
}

export default ServicesList