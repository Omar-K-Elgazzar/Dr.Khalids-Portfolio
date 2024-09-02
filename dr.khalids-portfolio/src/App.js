import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Research from './Pages/Research';
import Experience from './Pages/Experience';
import Awards from './Pages/Awards';
import Projects from './Pages/Projects';
import Teaching from './Pages/Teaching';
import Publications from './Pages/Publications';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
        <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Research" component={Research} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Awards" component={Awards} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Teaching" component={Teaching} />
            <Route path="/Publications" component={Publications} />
            <Route path="/Contact" component={Contact} />
          </Switch>
    </Router>
  );
}

export default App;

