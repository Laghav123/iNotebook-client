import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


// CSS files imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Other components import
import { Home } from './components/Home';
import MyNav from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
