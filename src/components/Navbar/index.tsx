import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink } from './Elements'
import { FaBars } from "react-icons/fa"

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">kyotsu</NavLogo>
        <MobileIcon>
          <FaBars/>
        </MobileIcon>
        <NavMenu>

          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar