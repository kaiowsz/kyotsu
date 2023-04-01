import React, { useEffect, useState } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink } from './Elements'
import { FaBars } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"

interface NavbarProps {
  toggleOpen?: () => void;
}

function Navbar({toggleOpen}: NavbarProps) {

  const [scrollNav, setScrollNav] = useState<boolean>(false)

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>kyotsu</NavLogo>
        <MobileIcon onClick={toggleOpen}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>

          <NavItem>
            <NavLinks to="about" smooth={true} duration={500} spy={true}  offset={-80}>About</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="discover" smooth={true} duration={500} spy={true}  offset={-80}>Discover</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="services" smooth={true} duration={500} spy={true}  offset={-80}>Services</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="signup" smooth={true} duration={500} spy={true}  offset={-80}>Sign Up</NavLinks>
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