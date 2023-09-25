import React, { useEffect, useState } from 'react';
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

import { useTicketData } from '../TicketDataContext';
export const HeaderButton = () => {
  // const [tickets, setTickets] = useState([]);

  const { setFilteredTickets, tickets } = useTicketData();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`http://localhost:3001/Tickets`);

  //       const data = await response.json();
  //       setTickets(data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // const handleFilter = (category) => {
  //   const filtered = tickets.filter((ticket) => ticket.ticketType === category);
  //   setFilteredTickets(filtered);
  // };

  ///loop through data and count the amount of tickets for concerts
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
        <Text margin={'0 10px 0 0'}>2</Text>
      </ButtonContainer>
      <ButtonContainer color={darkModeColors.foreground}>
        <LeftContainerContent>
          <IconContainer src={MoviesIcon} />
          <Text margin={'0 0 0 10px'}>Movies</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>1</Text>
      </ButtonContainer>
      <ButtonContainer color={darkModeColors.foreground}>
        <LeftContainerContent>
          <IconContainer src={ConcertsIcon} />
          <Text margin={'0 0 0 10px'}>Concerts</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>3</Text>
      </ButtonContainer>
    </ButtonGridContainer>
  );
};
