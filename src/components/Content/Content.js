import React from 'react';
import { ContentContainer } from './Content.style';
import { CardList } from '../TicketCards/CardList';
import { Card } from '../TicketCards/Card';
import { TicketContext } from '../../TicketContext/TicketContext';
import { useContext } from 'react';
export const Content = () => {
  const { tickets } = useContext(TicketContext);

  return (
    <ContentContainer>
      <CardList>
        {tickets.map((ticket) => (
          <Card
            id={ticket.id}
            title={ticket.title}
            ticketType={ticket.ticketType}
            date={ticket.date}
            location={ticket.location}
          />
        ))}
      </CardList>
    </ContentContainer>
  );
};
