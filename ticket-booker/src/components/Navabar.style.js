import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { screen } from '@testing-library/react';

export const NavbarContainer = styled.nav`
  width: 95%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dbdbdb;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex: 5%;
  align-items: center;
  justify-content: center;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: red;

  @media (max-width: 555px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 5%;
  align-items: center;
  justify-content: center;
  /* background-color: purple; */
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto; //height auto to allow the image to scale properly and not over stretch
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
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
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

  @media (min-width: 700px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.div`
  background-color: 'grey';
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
