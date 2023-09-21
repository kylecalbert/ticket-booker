// Icon.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fontSizes } from '../Fonts/Fonts';
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: '1.2em';
  color: white;
`;

const Icon = ({ icon }) => {
  return (
    <IconContainer>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
  );
};

export default Icon;
