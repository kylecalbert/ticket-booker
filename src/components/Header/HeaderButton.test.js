////need to test all the the buttons render
///need to test filtering functionality, the when the user clicks on a certain button, the appropraite cards render
///need to test the ticket count values appear correctly

//supertest
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { TicketContext } from '../../TicketContext/TicketContext';
import { HeaderButton } from './HeaderButton';
import { mockData } from '../../test/MockData';

describe('HeaderButton', () => {
  it('Should render buttons', () => {
    render(
      <TicketContext.Provider value={mockData}>
        <HeaderButton />
      </TicketContext.Provider>
    );

    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Concerts')).toBeInTheDocument();
    expect(screen.getByText('Travels')).toBeInTheDocument();
    expect(screen.getByText('All Tickets')).toBeInTheDocument();
  });

  it('Should filter by movies', () => {
    render(
      <TicketContext.Provider value={mockData}>
        <HeaderButton />
      </TicketContext.Provider>
    );

    const movieBtn = screen.getByTestId('movie-button');
    fireEvent.click(movieBtn);

    expect(mockData.setTickets).toHaveBeenCalledWith([
      {
        title: 'Jurassic Park Screening',
        time: '3:30PM',
        date: '9/12/2023',
        location: 'Cineplex Cinemas',
        ticketType: 'Movie',
        id: 3,
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
