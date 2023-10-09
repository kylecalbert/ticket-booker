////need to test all the the buttons render
///need to test filtering functionality, the when the user clicks on a certain button, the appropraite cards render
///need to test the ticket count values appear correctly

import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import { TicketProvider } from '../../TicketContext/TicketContext';
import { HeaderButton } from './HeaderButton';
describe('Testing header buttons', () => {
  it('Should render buttons and click', () => {
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

        {
          title: 'Jurassic Park Screening',
          time: '3:30PM',
          date: '9/12/2023',
          location: 'Cineplex Cinemas',
          ticketType: 'Movie',
        },
        {
          title: 'The Avengers',
          time: '4:00PM',
          date: '10/12/2024',
          location: 'Cineworld',
          ticketType: 'Movie',
        },
      ],
      setOriginalTickets: mockSetOriginalTickets,
    };

    const { getByAllByText } = render(
      <TicketProvider value={mockData}>
        <HeaderButton />
      </TicketProvider>
    );

    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Concerts')).toBeInTheDocument();
    expect(screen.getByText('Travels')).toBeInTheDocument();
    expect(screen.getByText('All Tickets')).toBeInTheDocument();

    // fireEvent.click(screen.getByText('Movies'));
    fireEvent.click(screen.getByTestId('movie-button'));
    console.log(fireEvent.click(screen.getByTestId('movie-button')));

    expect(mockSetTickets).toHaveBeenCalledWith([
      {
        title: 'Jurassic Park Screening',
        time: '3:30PM',
        date: '9/12/2023',
        location: 'Cineplex Cinemas',
        ticketType: 'Movie',
      },
      {
        title: 'The Avengers',
        time: '4:00PM',
        date: '10/12/2024',
        location: 'Cineworld',
        ticketType: 'Movie',
      },
    ]);
  });
});
