import React from 'react'
import { LeftContainer, LinkContainer, LogoContainer, MiddleContainer, NavbarContainer,ProfileContainer,ProfileImage,RightContainer } from './Navabar.style'
import Logo from '../Assets/Logo.png'
import { LogoImage } from './Navabar.style'
import Profile from '../Assets/Profile.png'
import { Link } from 'react-router-dom'
import { NavbarLink } from './Navabar.style'

export const Navbar = () => {
  return (
    <NavbarContainer>

    <LeftContainer><LogoContainer><LogoImage src={Logo}/></LogoContainer></LeftContainer>
    <MiddleContainer>
     
      <LinkContainer> <NavbarLink to='/Home'>Home</NavbarLink>
      <NavbarLink to='/About'>About</NavbarLink>
      <NavbarLink to='/Contact'>Contact</NavbarLink>
      <NavbarLink to='/FAQ'>FAQ</NavbarLink></LinkContainer></MiddleContainer>
    <RightContainer><ProfileContainer><ProfileImage src={Profile}/></ProfileContainer></RightContainer>
     


    </NavbarContainer>
  )
}
