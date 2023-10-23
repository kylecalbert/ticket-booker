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
import { useContext } from 'react';
import { TicketContext } from '../../TicketContext/TicketContext';

export const HeaderButton = () => {
  const { setTickets, originalTickets } = useContext(TicketContext);
  const [activeButton, setActiveButton] = useState('All Tickets');

  const countTicketType = (type) => {
    return originalTickets.filter((ticket) => ticket.ticketType === type)
      .length;
  };

  const handleButtonClick = (category) => {
    setActiveButton(category);
    if (category === 'All Tickets') {
      setTickets(originalTickets);
    } else {
      const filterTickets = originalTickets.filter(
        (ticket) => ticket.ticketType === category
      );

      setTickets(filterTickets);
    }

    // console.log(tickets);
  };

  return (
    <ButtonGridContainer>
      <ButtonContainer
        data-cy="alltickets-cy-btn"
        onClick={() => handleButtonClick('All Tickets')}
        background={activeButton === 'All Tickets'}
      >
        <LeftContainerContent>
          <IconContainer src={TicketsIcon} />
          <Text margin={'0 0 0 10px'}>All Tickets</Text>
        </LeftContainerContent>
        <Text color={darkModeColors.background} margin={'0 10px 0 0'}>
          {originalTickets.length}
        </Text>
      </ButtonContainer>
      <ButtonContainer
        onClick={() => handleButtonClick('Travel')}
        background={activeButton === 'Travel'}
        data-cy="travel-cy-btn"
      >
        <LeftContainerContent>
          <IconContainer src={AirplaneIcon} />
          <Text margin={'0 0 0 10px'}>Travels</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>{countTicketType('Travel')}</Text>
      </ButtonContainer>
      <ButtonContainer
        data-testid="movie-button"
        onClick={() => handleButtonClick('Movie')}
        background={activeButton === 'Movie'}
        data-cy="movie-cy-btn"
      >
        <LeftContainerContent>
          <IconContainer src={MoviesIcon} />
          <Text margin={'0 0 0 10px'}>Movies</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>{countTicketType('Movie')}</Text>
      </ButtonContainer>
      <ButtonContainer
        data-cy="concert-cy-btn"
        onClick={() => handleButtonClick('Concert')}
        background={activeButton === 'Concert'}
      >
        <LeftContainerContent>
          <IconContainer src={ConcertsIcon} />
          <Text margin={'0 0 0 10px'}>Concerts</Text>
        </LeftContainerContent>
        <Text margin={'0 10px 0 0'}>{countTicketType('Concert')}</Text>
      </ButtonContainer>
    </ButtonGridContainer>
  );
};
