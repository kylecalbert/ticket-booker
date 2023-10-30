import React, { createContext, useState, useEffect } from 'react';

export const TicketContext = createContext(null);

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [originalTickets, setOriginalTickets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Default');
  const [originalOrder, setOriginalOrder] = useState([]);

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
      value={{
        tickets,
        setTickets,
        originalTickets,
        setOriginalTickets,
        selectedCategory,
        setSelectedCategory,
        originalOrder,
        setOriginalOrder,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
