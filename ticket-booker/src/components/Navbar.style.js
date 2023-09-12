import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darkModeColors } from '../constants/colors';

const minWidth = '556px';
export const NavbarContainer = styled.nav`
  width: 95%;
  height: 80px;
  background-color: ${darkModeColors.background};
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${darkModeColors.borders};

  @media (min-width: ${minWidth}) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 5%;
  height: 80px;
  align-items: center;
  justify-content: center;
  /* background: green; */
`;

export const LogoImage = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto; //height auto to allow the image to scale properly and not overstretch
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 90%;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ExtendedMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${minWidth}) {
    ///hides when the width becomes 556 or greater
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 5%;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto;
`;

export const NavbarLink = styled(Link)`
  color: ${darkModeColors.textPrimary};
  text-decoration: none;
  padding: 20px;
  font-size: 18px;

  @media (max-width: ${minWidth}) {
    display: none;
  }
`;

export const NavbarInnerContainer = styled.div`
  display: flex;

  width: 100%;
`;

export const MenuIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  background: none;
  font-size: 45px;
  cursor: pointer;
  border: none;

  @media (min-width: ${minWidth}) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarLinkExtended = styled(Link)`
  color: ${darkModeColors.textPrimary};
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
`;
