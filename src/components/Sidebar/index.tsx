import React from 'react'

import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarLink, SidebarMenu } from "./Elements"

interface SidebarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Sidebar = ({isOpen, toggleOpen}: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleOpen} >
      <Icon onClick={toggleOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>

          <SidebarLink to="about" onClick={toggleOpen}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggleOpen}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggleOpen}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggleOpen}>Sign Up</SidebarLink>

        </SidebarMenu>

        <SideBtnWrap>

          <SidebarRoute to="/signin">Sign In</SidebarRoute>

        </SideBtnWrap>

      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar