import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { AppContainer } from './App.styles';
import { Content } from './components/Content/Content';
import { WebsiteFooter } from './components/Footer/WebsiteFooter';
import { TicketProvider } from './TicketContext/TicketContext';
function App() {
  return (
    <TicketProvider>
      <AppContainer>
        <Router>
          <Navbar />
          <Header />
          <Content />
          <WebsiteFooter />
        </Router>
      </AppContainer>
    </TicketProvider>
  );
}

export default App;
