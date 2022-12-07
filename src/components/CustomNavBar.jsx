import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const CustomNavBar = () => {

    return(
      <Navbar expand="lg" variant='dark' className='navStyle'>
      <Container className='containerNav'>
        <Navbar.Brand> <Link to='/'><img src='/src/img/logo_moscato.svg' className='navLogo'></img></Link></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link><Link to='/category/1'>Vinos</Link></Nav.Link>
                <Nav.Link><Link to='/category/2'>Cervezas</Link></Nav.Link> 
                <Nav.Link><Link to='/category/3'>Espirituosas</Link></Nav.Link>
                <Nav.Link><Link to='/category/4'>Combos</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <CartWidget />
    </Navbar>
  
    )
}

export default CustomNavBar;