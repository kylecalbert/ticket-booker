import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AppContainer } from './App.styles';
import { WebsiteFooter } from './components/Footer/WebsiteFooter';
import { TicketProvider } from './TicketContext/TicketContext';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Faq } from './components/Faq/Faq';

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <TicketProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Faq" element={<Faq />} />
          </Routes>
        </TicketProvider>
        <WebsiteFooter />
      </Router>
    </AppContainer>
  );
}

export default App;
