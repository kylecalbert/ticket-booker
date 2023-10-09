import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import { TicketProvider } from '../../TicketContext/TicketContext';
import { Card } from './Card';

describe('Testing the Card component', () => {
  it('Should render the card component', () => {
    const mockSetTickets = jest.fn();
    const mockSetOriginalTickets = jest.fn();

    const mockData = {
      tickets: [
        {
          title: 'Drake Concert',
          date: '2023-10-10',
          time: '15:00',
          location: 'London',
          ticketType: 'Concert',
          id: 1,
        },
        {
          title: 'Beyonce Concert',
          date: '2023-11-10',
          time: '16:00',
          location: 'Paris',
          ticketType: 'Concert',
          id: 2,
        },
      ],
      setTickets: mockSetTickets,

      originalTickets: [
        {
          title: 'Drake Concert',
          date: '2023-10-10',
          time: '15:00',
          location: 'London',
          ticketType: 'Concert',
          id: 1,
        },
        {
          title: 'Beyonce Concert',
          date: '2023-11-10',
          time: '16:00',
          location: 'Paris',
          ticketType: 'Concert',
          id: 2,
        },
      ],
      setOriginalTickets: mockSetOriginalTickets,
    };

    const { getByAllByText } = render(
      <TicketProvider value={mockData}>
        {mockData.tickets.map((ticket) => (
          <Card
            title={ticket.title}
            location={ticket.location}
            date={ticket.date}
            id={ticket.id}
            time={ticket.time}
            ticketType={ticket.ticketType}
            key={ticket.id}
          />
        ))}
      </TicketProvider>
    );

    expect(screen.getByText('Drake Concert')).toBeInTheDocument();
    expect(screen.getByText('2023-10-10')).toBeInTheDocument();
    expect(screen.getByText('15:00')).toBeInTheDocument();
    expect(screen.getByText('London')).toBeInTheDocument();
  });
});
