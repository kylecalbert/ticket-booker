import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { AppContainer } from './App.styles';
import { Content } from './components/Content/Content';
import { WebsiteFooter } from './components/Footer/WebsiteFooter';
import { TicketProvider } from './TicketContext/TicketContext';
function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <TicketProvider>
          <Header />
          <Content />
        </TicketProvider>
        <WebsiteFooter />
      </Router>
    </AppContainer>
  );
}

export default App;
