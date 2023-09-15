import React from 'react';
import {
  ButtonContainer,
  LeftContainerContent,
  ButtonGridContainer,
} from './HeaderButton.style';
import { IconContainer } from './HeaderButton.style';
import TicketsIcon from '../../Assets/TicketsIcon.png';
import AirplaneIcon from '../../Assets/AirplaneIcon.png';
import ConcertsIcon from '../../Assets/ConcertsIcon.png';
import MoviesIcon from '../../Assets/MoviesIcon.png';
import { darkModeColors } from '../../constants/colors';

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
          <Text color={darkModeColors.background} margin={'0 0 0 10px'}>
            All Tickets
          </Text>
        </LeftContainerContent>
        <Text color={darkModeColors.background} margin={'0 10px 0 0'}>
          6
        </Text>
      </ButtonContainer>
      <ButtonContainer color={darkModeColors.foreground}>
        <LeftContainerContent>
          <IconContainer src={AirplaneIcon} />
          <Text margin={'0 0 0 10px'}>Travels</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
      <ButtonContainer color={darkModeColors.foreground}>
        <LeftContainerContent>
          <IconContainer src={MoviesIcon} />
          <Text margin={'0 0 0 10px'}>Movies</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
      <ButtonContainer color={darkModeColors.foreground}>
        <LeftContainerContent>
          <IconContainer src={ConcertsIcon} />
          <Text margin={'0 0 0 10px'}>Concerts</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>6</Text>
      </ButtonContainer>
    </ButtonGridContainer>
  );
};