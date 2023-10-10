import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import { TicketProvider } from '../../TicketContext/TicketContext';
import { Card } from './Card';
import { TicketContext } from '../../TicketContext/TicketContext';
import { mockData } from '../../test/MockData';
describe('Testing the Card component', () => {
  it('Should render the card component', () => {
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
      // {
      //   title: 'Jurassic Park Screening',
      //   time: '3:30PM',
      //   date: '9/12/2023',
      //   location: 'Cineplex Cinemas',
      //   ticketType: 'Movie',
      //   id: 3,
      // },
      {
        title: 'The Avengers',
        time: '4:00PM',
        date: '10/12/2024',
        location: 'Cineworld',
        ticketType: 'Movie',
        id: 4,
      },
    ]);

    // expect(screen.getByText('Drake Concert')).toBeInTheDocument();
    // expect(screen.getByText('2023-10-10')).toBeInTheDocument();
    // expect(screen.getByText('15:00')).toBeInTheDocument();
    // expect(screen.getByText('London')).toBeInTheDocument();

    // fireEvent.click(screen.getByTestId('delete-button-1'));
  });
});
