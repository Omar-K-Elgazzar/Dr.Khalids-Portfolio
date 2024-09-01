import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Papers from './Papers';
import Contact from './Contact';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className = "content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Papers" component={Papers} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

