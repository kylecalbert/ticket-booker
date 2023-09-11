import logo from './logo.svg';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { AppContainer } from './App.styles';
function App() {
  return (
  <AppContainer>
    <Router>
 <Navbar/>
 </Router>
  </AppContainer>

 
  );
}

export default App;
