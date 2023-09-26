import React, { useEffect } from 'react';
import { ContentContainer, CardContainer } from './Content.style';
import { Card } from './Card';
import { useState } from 'react';

export const Content = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/Tickets`);

        const data = await response.json();
        setTickets(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

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
