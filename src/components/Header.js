import {Container, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap'
import NucampLogo from '../app/assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'> 
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='Nucamp Logo' className='float-start'/>
            <h1 className='mt-1'>Nucamp</h1>
          </NavbarBrand>

          <NavbarToggler />
          <Collapse navbar>
            <Nav className = 'ms-auto' navbar>
              <NavItem>
                <NavLink className = 'nav-link' to='/'>
                  <i className = 'fa fa-home fa-lg' /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = 'nav-link' to='/directory'>
                  <i className = 'fa fa-list fa-lg' /> Directory
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = 'nav-link' to='/contact'>
                  <i className = 'fa fa-info fa-lg' /> Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = 'nav-link' to='/about'>
                  <i className = 'fa fa-adress-card fa-lg' /> About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;