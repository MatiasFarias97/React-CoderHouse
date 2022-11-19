import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../img/logo_moscato.svg'
import { BsCart2 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';

const CustomNavBar = () => {

    return(
      <Navbar expand="lg" variant='dark' className='navStyle'>
      <Container className='containerNav'>
        <Navbar.Brand href="#home" className='navTitle'>MOSCATO VINOTECA</Navbar.Brand>  {/* <img src='{logo}'></img> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link href="#link">Vinos</Nav.Link>
                <Nav.Link href="#link">Cervezas</Nav.Link> 
                <Nav.Link href="#link">Espirituosas</Nav.Link>
                <Nav.Link href="#link">Combos</Nav.Link>
                <Nav.Link href="#link">Ofertas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <div className='divCart'>
          <BsCart2  className='cart'/>
          <Badge bg="info">9</Badge>
        </div>
    </Navbar>
  
    )
}

export default CustomNavBar;