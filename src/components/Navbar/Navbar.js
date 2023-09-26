import React, { useState } from 'react';
import {
  LeftContainer,
  MenuContainer,
  MiddleContainer,
  NavbarContainer,
  MenuIconContainer,
  ProfileImage,
  RightContainer,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  ExtendedMenuContainer,
} from './Navbar.style';
import Logo from '../../Assets/Logo.png';
import { LogoImage } from './Navbar.style';
import Profile from '../../Assets/Profile.png';
import { NavbarLink } from './Navbar.style';
import { NavbarInnerContainer } from './Navbar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendnavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <MenuIconContainer
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: 'white', fontSize: '35px' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: 'white', fontSize: '35px' }}
              />
            )}
          </MenuIconContainer>

          <LogoImage src={Logo} alt="Logo" />
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
          <ProfileImage src={Profile} />
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <ExtendedMenuContainer>
            <NavbarLinkExtended to="/Home">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/About">About</NavbarLinkExtended>
            <NavbarLinkExtended to="/Contact">Contact</NavbarLinkExtended>
            <NavbarLinkExtended to="/FAQ">FAQ</NavbarLinkExtended>
          </ExtendedMenuContainer>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
