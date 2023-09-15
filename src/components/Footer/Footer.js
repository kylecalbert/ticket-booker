import React from 'react';

import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  width: 95%;
  height: ${(props) => props.height || '15%'};
  justify-content: space-between;
  margin: ${(props) => props.margin || '0px'};
  background-color: red;
`;
export const Footer = ({ ...props }) => {
  return <StyledFooter {...props}></StyledFooter>;
};
