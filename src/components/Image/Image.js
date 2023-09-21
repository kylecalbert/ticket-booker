import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  margin: ${(props) => props.margin || '10px'};
  max-width: 100px;
  height: auto; //height auto to allow the image to scale properly and not overstretch
`;

export const Image = ({ ...props }) => {
  return <StyledImage {...props}></StyledImage>;
};
