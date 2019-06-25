import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </div>

    </Router>
  );
}

export default App;
