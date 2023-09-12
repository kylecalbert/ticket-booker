import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { AppContainer } from './App.styles';
function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
      </Router>
    </AppContainer>
  );
}

export default App;
