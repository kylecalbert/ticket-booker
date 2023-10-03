import React, { useEffect } from 'react';
import { ContentContainer, CardContainer } from './Content.style';
import { Card } from './Card';
import { useState } from 'react';
import { TicketContext } from '../../TicketContext/TicketContext';
import { useContext } from 'react';
export const Content = () => {
  const { tickets, setTickets } = useContext(TicketContext);

  return (
    <ContentContainer>
      <CardContainer>
        {tickets.map((ticket) => (
          <Card
            id={ticket.id}
            title={ticket.title}
            ticketType={ticket.ticketType}
            date={ticket.date}
            location={ticket.location}
          />
        ))}
      </CardContainer>
    </ContentContainer>
  );
};
