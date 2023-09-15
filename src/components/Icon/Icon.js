// Icon.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
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
