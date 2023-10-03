import React, { createContext, useState, useEffect } from 'react';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [category, setCategory] = useState('All Tickets');
  const [tickets, setTickets] = useState([]);
  const [originalTickets, setOriginalTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/Tickets`);

        const data = await response.json();
        setTickets(data);
        setOriginalTickets(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  return (
    <TicketContext.Provider
      value={{ category, setCategory, tickets, setTickets, originalTickets }}
    >
      {children}
    </TicketContext.Provider>
  );
};
