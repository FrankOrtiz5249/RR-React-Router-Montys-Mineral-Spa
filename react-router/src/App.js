import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home.js'
import About from './components/About'
import Packages from './components/Packages'


function App() {

  const packages = ['Activate your Crystals', 
  'Monkey Meditation', 
  'Soak in the Hotsprings', 
  'Hypnotherapy', 
  'Mineral Bath']

return (
  <div classname="App">
    <Router>
      <header>
        <div classname="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/packages">Our Packages</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="display">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/packages" element={<Packages packages={packages}/>} />
        </Routes>
      </div>
    </Router>
  </div>
);
}

export default App;

// all the paths work and the text is showing the only thing not showing is the BG image from the repo



