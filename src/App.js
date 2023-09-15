import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { AppContainer } from './App.styles';

import { Content } from './components/Content/Content';
function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Header />
        <Content />
      </Router>
    </AppContainer>
  );
}

export default App;
