import { createContext, useContext, useState, useEffect } from 'react';
const TicketDataContext = createContext();

export const useTicketData = () => {
  return useContext(TicketDataContext);
};

export const TicketDataProvider = ({ children }) => {
  const [tickets, setTickets] = useState();
  const [filteredTickets, setFilteredTickets] = useState([]);

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

  console.log('tickets here');

  console.log(tickets);
  return (
    <TicketDataContext.Provider
      value={{ tickets, filteredTickets, setFilteredTickets }}
    >
      {children}
    </TicketDataContext.Provider>
  );
};
