import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'


const Header = () => {
  const dispatch =useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => { 
    dispatch(logout())
  }
    return(
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
              <Navbar.Brand ><img
        src="/logo.png"
        width="200px"
        className="d-inline-block align-top"
        alt="Smart logo"/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/about'>
              <Nav.Link href='/about'>ABOUT</Nav.Link>
            </LinkContainer>
            <NavDropdown title='PRODUCTS' id='basic-nav-dropdown'>
              <NavDropdown.Item href="#action/2.1">WATER PUMPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">CABLE & PANNEL</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">GRINDER</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.4">SAW MILLS</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.5">RICE MILLS & COMBINE MILLS</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.6">CAR WASHER</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.7">BOREWELL SUBMERSIBLE</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.8">WELDING MACHINE</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.9">INDUCTION MOTORS</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.10">GAS GEYSER</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.11">VIBRATOR & NEEDLE</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.12">MISCELLANEOUS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='BRANDS' id='basic-nav-dropdown'>
            <NavDropdown.Item href="#action/3.1">KIRLOSKAR</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">VARUNA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">SHARP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">DUKE</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">SHIVA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">SHIMGE</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">SUBMERSIBLE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Route render={({ history }) => <SearchBox history={ history }/>} />
            <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to ='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ):<LinkContainer to='/login'>
               <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
                </LinkContainer>}
                {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer LinkContainer to ='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to ='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to ='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    )}

export default Header
