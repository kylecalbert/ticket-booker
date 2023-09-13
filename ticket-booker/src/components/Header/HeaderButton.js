import React from 'react';
import {
  ButtonContainer,
  LeftContainerContent,
  ButtonGridContainer,
} from './HeaderButton.style';
import { IconContainer } from './HeaderButton.style';
import TicketsIcon from '../../Assets/TicketsIcon.png';
import { Text } from '../Text/Text';

// const data = [
//   {
//     text: 'All Tickets',
//     count: 6,
//     icon: require('../../Assets/TicketsIcon.png'),
//   },
//   { text: 'Travels', count: 4, icon: require('../../Assets/AirplaneIcon.png') },
// ];

export const HeaderButton = () => {
  return (
    <ButtonGridContainer>
      <ButtonContainer>
        <LeftContainerContent>
          <IconContainer src={TicketsIcon} />
          <Text margin={'0 0 0 10px'}>All Tickets</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
      <ButtonContainer>
        <LeftContainerContent>
          <IconContainer src={TicketsIcon} />
          <Text margin={'0 0 0 10px'}>Travels</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
      <ButtonContainer>
        <LeftContainerContent>
          <IconContainer src={TicketsIcon} />
          <Text margin={'0 0 0 10px'}>Movies</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
      <ButtonContainer>
        <LeftContainerContent>
          <IconContainer src={TicketsIcon} />
          <Text margin={'0 0 0 10px'}>Concerts</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
    </ButtonGridContainer>
  );
};
