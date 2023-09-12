import React from 'react';
import {
  ButtonContainer,
  LeftContainer,
  SmallTextContainer,
} from './HeaderButton.style';
import { IconContainer } from './HeaderButton.style';
import TicketsIcon from '../../Assets/TicketsIcon.png';
export const HeaderButton = () => {
  return (
    <ButtonContainer>
      <LeftContainer>
        <IconContainer src={TicketsIcon} />
        <SmallTextContainer>All Tickets</SmallTextContainer>
      </LeftContainer>
    </ButtonContainer>
  );
};
