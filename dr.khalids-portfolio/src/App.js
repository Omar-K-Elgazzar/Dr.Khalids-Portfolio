import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Papers from './Papers';
import Contact from './Contact';



function App() {
  return (

    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path ='/'>
              <Home></Home>
            </Route>
            <Route exact path ='/papers'>
              <Papers></Papers>
            </Route>
            <Route exact path ='/Contact'>
              <Contact></Contact>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
