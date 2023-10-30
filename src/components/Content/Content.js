// Content.js

import React, { useContext, useState, useEffect } from 'react';
import { ContentContainer } from './Content.style';
import { CardList } from '../TicketCards/CardList';
import { Card } from '../TicketCards/Card';
import { TicketContext } from '../../TicketContext/TicketContext';
import styled from 'styled-components';
import { sortTicketsByDate } from '../Sorting/Sorting';

///when user clicks sort by date
///tickets should be sorted by date

const DropdownContainer = styled.div`
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 1rem;
`;

const Option = styled.option``;

export const Content = () => {
  const {
    tickets,
    originalTickets,
    setOriginalTickets,
    originalOrder,
    setOriginalOrder,
    setTickets,
    selectedCategory,
    setSelectedCategory,
  } = useContext(TicketContext);

  ///need to add some sort of check so function know if on sub categry, then filter the subcatgero
  const handleSortChange = (selectedValue) => {
    setSelectedCategory(selectedValue);

    if (selectedValue === 'Date') {
      const sortedTickets = sortTicketsByDate(tickets);
      setOriginalOrder(tickets);
      setTickets(sortedTickets);
    } else if (selectedValue === 'Default') {
      setTickets(originalOrder); // Reset to the original order from context
    }
  };

  return (
    <ContentContainer>
      <DropdownContainer>
        <Select
          value={selectedCategory}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <Option value="Default">Default</Option>
          <Option value="Date">Date</Option>
        </Select>
      </DropdownContainer>

      <CardList>
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
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
