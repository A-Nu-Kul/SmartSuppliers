import React from "react"
import SocialFlow from "./SocialFlow"
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Footer = () => <footer className="page-footer font-small blue pt-4 py-5 bg-light">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <img src="logo.png" alt="Smart Suppliers Footer logo" style={{width: 100}}/>
            <br />
                <p>We have been providing technical knowhow and consulting to more than 100 industries all over Nepal; this along with our supply of excellent branded products and services gives us the added advantage of ensuring high end quality and performance.</p>
                <p>We provide complete solutions for all industrial & domestic water needs.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Useful Links</h5>
                <ul className="list-unstyled">
                    <LinkContainer to='/about'>
                        <Nav.Link href='/about'>ABOUT US</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/partners'>
                        <Nav.Link href='/partners'>OUR PARTNERS</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/services'>
                        <Nav.Link href='/services'>OUR SERVICES</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Nav.Link href='/contact'>CONTACT US</Nav.Link>
                    </LinkContainer>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
            <SocialFlow />
            </div>
        </div>
    </div>
    <div class="py-5 bg-light">
    <p className='m-0 text-center text-black'>
        Copyright &copy; { "2005-" + (new Date().getFullYear())} Smart Suppliers
    </p>
    </div>
</footer>


export default Footer
