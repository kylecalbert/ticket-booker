import React from 'react';
import { ContentContainer, CardContainer } from './Content.style';
import { Card } from './Card';
import { TicketContext } from '../../TicketContext/TicketContext';
import { useContext } from 'react';
export const Content = () => {
  const { tickets } = useContext(TicketContext);

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
