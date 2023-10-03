import React, { createContext, useState, useEffect } from 'react';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [category, setCategory] = useState('All Tikcets');
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

  console.log(tickets);
  return (
    <TicketContext.Provider
      value={{ category, setCategory, tickets, setTickets }}
    >
      {children}
    </TicketContext.Provider>
  );
};
