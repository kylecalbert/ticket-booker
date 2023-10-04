import React from 'react';
import { CardListContainer } from './CardList.style';
import { useContext } from 'react';
import { TicketContext } from '../../TicketContext/TicketContext';
import { Card } from './Card';
export const CardList = () => {
  const { tickets } = useContext(TicketContext);

  return (
    <CardListContainer>
      {tickets.map((ticket) => (
        <Card
          id={ticket.id}
          title={ticket.title}
          ticketType={ticket.ticketType}
          date={ticket.date}
          location={ticket.location}
        />
      ))}
    </CardListContainer>
  );
};
