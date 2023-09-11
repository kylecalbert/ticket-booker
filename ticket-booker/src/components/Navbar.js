import React from 'react'
import { LeftContainer, LinkContainer, LogoContainer, MiddleContainer, NavbarContainer,ProfileContainer,ProfileImage,RightContainer } from './Navabar.style'

import Logo from '../Assets/Logo.png'
import { LogoImage } from './Navabar.style'
import Profile from '../Assets/Profile.png'

export const Navbar = () => {
  return (
    <NavbarContainer>

    <LeftContainer><LogoContainer><LogoImage src={Logo}></LogoImage></LogoContainer></LeftContainer>
    <MiddleContainer><LinkContainer><div>1</div><div>2</div><div>3</div></LinkContainer></MiddleContainer>
    <RightContainer><ProfileContainer><ProfileImage src={Profile}/></ProfileContainer></RightContainer>

    </NavbarContainer>
  )
}
