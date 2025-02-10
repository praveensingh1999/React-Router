
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HOME from './components/home';
import SUPOORT from './components/support';
import ABOUT from './components/about';
import LABS from './components/labs';
import NOTFOUND from './components/notfound.js'
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/support" element={<SUPOORT />} />
        <Route path="/about" element={<ABOUT />} />
        <Route path="/labs" element={<LABS />} />
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </div>
  );
}

export default App;
