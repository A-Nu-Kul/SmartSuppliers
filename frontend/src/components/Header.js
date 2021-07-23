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
              <NavDropdown.Item href="/waterpumps">WATER PUMPS</NavDropdown.Item>
              <NavDropdown.Item href="/cabelandpannel">CABLE & PANNEL</NavDropdown.Item>
              <NavDropdown.Item href="/grinder">GRINDER</NavDropdown.Item>
              <NavDropdown.Item href="/sawmills">SAW MILLS</NavDropdown.Item>
              <NavDropdown.Item href="/ricemillsandcombinemills">RICE MILLS & COMBINE MILLS</NavDropdown.Item>
              <NavDropdown.Item href="/carwasher">CAR WASHER</NavDropdown.Item>
              <NavDropdown.Item href="/borewellsubmersible">BOREWELL SUBMERSIBLE</NavDropdown.Item>
              <NavDropdown.Item href="/weldingmachine">WELDING MACHINE</NavDropdown.Item>
              <NavDropdown.Item href="/inductionmotors">INDUCTION MOTORS</NavDropdown.Item>
              <NavDropdown.Item href="/gasgeyser">GAS GEYSER</NavDropdown.Item>
              <NavDropdown.Item href="vibratorandneedle">VIBRATOR & NEEDLE</NavDropdown.Item>
              <NavDropdown.Item href="/miscellaneous">MISCELLANEOUS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='BRANDS' id='basic-nav-dropdown'>
            <NavDropdown.Item href="/kirloskar">KIRLOSKAR</NavDropdown.Item>
            <NavDropdown.Item href="/varuna">VARUNA</NavDropdown.Item>
            <NavDropdown.Item href="/sharp">SHARP</NavDropdown.Item>
            <NavDropdown.Item href="/duke">DUKE</NavDropdown.Item>
            <NavDropdown.Item href="/shiva">SHIVA</NavDropdown.Item>
            <NavDropdown.Item href="/shimge">SHIMGE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Route render={({ history }) => <SearchBox history={ history }/>} />
            <Nav className='mr-auto'>
            {/*<LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
    </LinkContainer> */}
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
