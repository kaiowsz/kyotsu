import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './Elements'

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Something</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar