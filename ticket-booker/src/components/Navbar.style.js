import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 95%;
  height: 80px;
  background-color: #222222;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;

  @media (min-width: 556px) {
    //if the width is atl
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

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  @media (min-width: 556px) {
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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 20px;
  font-size: 18px;

  @media (max-width: 555px) {
    display: none;
  }
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  /* background: blue; */
  width: 100%;
`;

export const MenuIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  background: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  border: none;

  @media (min-width: 556px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  background-color: 'grey';
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
`;
