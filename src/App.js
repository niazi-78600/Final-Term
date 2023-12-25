import './App.css'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Mission from './components/Mission';
import Myprofile from './components/MyProfile';
import Rockets from './components/Rockets'

function App() {
  return (
    <Router> 
    <div className="App">
     <nav>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="Missions">Missions</Link>
        </li>
        <li>
          <Link to="MyProfile">My Profile</Link>
        </li>
      </ul>
     </nav>
    <hr/>
    <Routes>
          <Route path="/Missions" element={<Mission />} />
          <Route path="/MyProfile" element={<Myprofile />} />
          <Route path="/" element={<Rockets />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
