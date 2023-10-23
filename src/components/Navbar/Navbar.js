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
            data-cy="menu-icon"
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? (
              <FontAwesomeIcon
                data-cy="close-icon"
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
            <NavbarLink data-cy="home" to="/">
              Home
            </NavbarLink>
            <NavbarLink data-cy="about" to="/About">
              About
            </NavbarLink>
            <NavbarLink data-cy="contact" to="/Contact">
              Contact
            </NavbarLink>
            <NavbarLink data-cy="faq" to="/Faq">
              FAQ
            </NavbarLink>
          </MenuContainer>
        </MiddleContainer>
        <RightContainer>
          <ProfileImage src={Profile} />
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer data-cy="navbar-extended">
          <ExtendedMenuContainer>
            <NavbarLinkExtended data-cy="home-extended" to="/">
              Home
            </NavbarLinkExtended>
            <NavbarLinkExtended data-cy="about-extended" to="/About">
              About
            </NavbarLinkExtended>
            <NavbarLinkExtended data-cy="contact-extended" to="/Contact">
              Contact
            </NavbarLinkExtended>
            <NavbarLinkExtended data-cy="faq-extended" to="/FAQ">
              FAQ
            </NavbarLinkExtended>
          </ExtendedMenuContainer>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
