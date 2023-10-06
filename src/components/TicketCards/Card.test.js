import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';
import { TicketProvider } from '../../TicketContext/TicketContext';

describe('Testing the card component', () => {
  it('Should render the card', () => {
    const { getByText } = render(
      <TicketProvider>
        <Card
          title="Drake Concert"
          date="2023-10-10"
          time="15:00"
          location="London"
          ticketType="Concert"
          id={1}
        />
      </TicketProvider>
    );
    expect(screen.getByText('Drake Concert')).toBeInTheDocument();
    expect(screen.getByText('2023-10-10')).toBeInTheDocument();
    expect(screen.getByText('15:00')).toBeInTheDocument();
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Concert')).toBeInTheDocument();
  });
});

///test the card
