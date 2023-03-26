import React from 'react'

import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarLink, SidebarMenu } from "./Elements"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>

          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>

        </SidebarMenu>

        <SideBtnWrap>

          <SidebarRoute to="/signin">Sign In</SidebarRoute>

        </SideBtnWrap>

      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar