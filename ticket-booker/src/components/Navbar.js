import React, { useState } from 'react';
import {
  LeftContainer,
  MenuContainer,
  LogoContainer,
  MiddleContainer,
  NavbarContainer,
  MenuIconContainer,
  ProfileContainer,
  ProfileImage,
  RightContainer,
  NavbarExtendedContainer,
} from './Navabar.style';
import Logo from '../Assets/Logo.png';
import { LogoImage } from './Navabar.style';
import Profile from '../Assets/Profile.png';
import { Link } from 'react-router-dom';
import { NavbarLink } from './Navabar.style';
import { NavbarInnerContainer } from './Navabar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [extendNavbar, setExtendedNavbar] = useState(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <MenuIconContainer
            onClick={() => {
              setExtendedNavbar((currentValue) => !currentValue);
            }}
          >
            {extendNavbar ? (
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: 'white', fontSize: '35px' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: 'white', fontSize: '35px' }}
              />
            )}
          </MenuIconContainer>
          <LogoContainer>
            <LogoImage src={Logo} />
          </LogoContainer>
        </LeftContainer>
        <MiddleContainer>
          <MenuContainer>
            <NavbarLink to="/Home">Home</NavbarLink>
            <NavbarLink to="/About">About</NavbarLink>
            <NavbarLink to="/Contact">Contact</NavbarLink>
            <NavbarLink to="/FAQ">FAQ</NavbarLink>
          </MenuContainer>
        </MiddleContainer>
        <RightContainer>
          <ProfileContainer>
            <ProfileImage src={Profile} />
          </ProfileContainer>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer>
        <MenuContainer>
          <NavbarLink to="/Home">Home</NavbarLink>
          <NavbarLink to="/About">About</NavbarLink>
          <NavbarLink to="/Contact">Contact</NavbarLink>
          <NavbarLink to="/FAQ">FAQ</NavbarLink>
        </MenuContainer>
      </NavbarExtendedContainer>
    </NavbarContainer>
  );
};
