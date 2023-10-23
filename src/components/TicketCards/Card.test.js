import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';
import { TicketContext } from '../../TicketContext/TicketContext';
import { mockData } from '../../test/MockData';
describe('Testing the Card component', () => {
  it('Should delete card from page upon clicking the delete button', () => {
    render(
      <TicketContext.Provider value={mockData}>
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
      </TicketContext.Provider>
    );

    fireEvent.click(screen.getByTestId('delete-button-3'));

    expect(mockData.setOriginalTickets).toHaveBeenCalledWith([
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

      {
        title: 'The Avengers',
        time: '4:00PM',
        date: '10/12/2024',
        location: 'Cineworld',
        ticketType: 'Movie',
        id: 4,
      },
    ]);
  });
});
