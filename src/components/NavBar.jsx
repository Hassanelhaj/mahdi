import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import{AiFillHome} from "react-icons/ai"
import {RiComputerFill} from "react-icons/ri"
import {HiInformationCircle} from "react-icons/hi"
import {AiTwotonePhone} from 'react-icons/ai';
const NavBar =()=> {
  return (
    <div className='nav-wrapper'>
    <Navbar  expand="lg">
      <Container className='nav-con'>
        <h2 className='logo-txt'>MAHDI</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link href="#home" ><p className='flex-row'><AiFillHome/><span>Home</span></p></Nav.Link>
            <Nav.Link href="#services"><p className='flex-row'>
                <RiComputerFill/>

            <span>Services</span></p>
            </Nav.Link>
            <Nav.Link href="#about"><p className='flex-row'>
            <HiInformationCircle/><span>About</span>
            </p>
            </Nav.Link>
            <Nav.Link href="#contact"><p className='flex-row'>
                <AiTwotonePhone/><span>Contact</span></p></Nav.Link>


           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;