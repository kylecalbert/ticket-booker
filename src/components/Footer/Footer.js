import React from 'react';

import styled from 'styled-components';
import { minWidth } from '../Navbar/Navbar.style';
export const StyledFooter = styled.div`
  display: flex;
  width: 95%;
  height: ${(props) => props.height || '15%'};
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin || '0px'};
  /* background-color: red; */
  border-top: ${(props) => props.bordertop || '0px'};
  padding: ${(props) => props.padding || '0px'};
  margin-top: auto;

  @media (max-width: ${minWidth}) {
    display: flex;
    flex-direction: ${(props) => props.flexdirection || 'column'};

    height: ${(props) => props.height || '200px'};

    justify-content: space-between;
    align-items: center;
  }
`;
export const Footer = ({ ...props }) => {
  return <StyledFooter {...props}></StyledFooter>;
};
