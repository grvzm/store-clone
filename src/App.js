import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
    </Router>
  );
}

export default App;
