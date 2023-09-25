import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { AppContainer } from './App.styles';
import { Text } from './components/Text/Text';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { WebsiteFooter } from './components/Footer/WebsiteFooter';
import { TicketDataProvider } from './components/TicketDataContext';
function App() {
  return (
    <AppContainer>
      <TicketDataProvider>
        <Router>
          <Navbar />
          <Header />
          <Content />
          <WebsiteFooter />
        </Router>
      </TicketDataProvider>
    </AppContainer>
  );
}

export default App;
