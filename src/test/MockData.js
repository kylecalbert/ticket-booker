import React from 'react';

export const mockSetTickets = jest.fn();
export const mockSetOriginalTickets = jest.fn();

export const mockTicketContext = {
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
