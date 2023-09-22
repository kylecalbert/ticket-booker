import React, { useEffect } from 'react';
import { ContentContainer, CardContainer } from './Content.style';
import { Card } from './Card';
import { useState } from 'react';
export const Content = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/Tickets')
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(tickets);
  return (
    <ContentContainer>
      <CardContainer>
        {tickets.map((ticket) => (
          <Card id={ticket.id} data={ticket} />
        ))}
      </CardContainer>
    </ContentContainer>
  );
};
