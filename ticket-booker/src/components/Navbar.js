import React from 'react'
import { LeftContainer, LinkContainer, LogoContainer, MiddleContainer, NavbarContainer,ProfileContainer,RightContainer } from './Navabar.style'
export const Navbar = () => {
  return (
    <NavbarContainer>

    <LeftContainer><LogoContainer>Logo</LogoContainer></LeftContainer>
    <MiddleContainer><LinkContainer><div>1</div><div>2</div><div>3</div></LinkContainer></MiddleContainer>
    <RightContainer><ProfileContainer>Profile</ProfileContainer></RightContainer>

    </NavbarContainer>
  )
}
