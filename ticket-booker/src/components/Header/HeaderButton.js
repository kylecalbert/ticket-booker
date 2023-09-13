import React from 'react';
import {
  ButtonContainer,
  LeftContainerContent,
  SmallTextContainer,
  RightContainerContent,
} from './HeaderButton.style';
import { IconContainer } from './HeaderButton.style';
import TicketsIcon from '../../Assets/TicketsIcon.png';
export const HeaderButton = () => {
  return (
    <ButtonContainer>
      <LeftContainerContent>
        <IconContainer src={TicketsIcon} />
        <SmallTextContainer>All Tickets</SmallTextContainer>
      </LeftContainerContent>
      <RightContainerContent>6</RightContainerContent>
    </ButtonContainer>
  );
};
