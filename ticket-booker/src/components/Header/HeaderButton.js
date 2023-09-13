import React from 'react';
import { ButtonContainer, LeftContainerContent } from './HeaderButton.style';
import { IconContainer } from './HeaderButton.style';
import TicketsIcon from '../../Assets/TicketsIcon.png';
import { Text } from '../Text/Text';
export const HeaderButton = () => {
  return (
    <ButtonContainer>
      <LeftContainerContent>
        <IconContainer src={TicketsIcon} />
        <Text margin={'0 0 0 10px'}>All Tickets</Text>
      </LeftContainerContent>
      <Text margin={'0 10px 0 0'}>6</Text>
    </ButtonContainer>
  );
};
