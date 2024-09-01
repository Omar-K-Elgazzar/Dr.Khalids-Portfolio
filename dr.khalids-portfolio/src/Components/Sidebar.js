import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Khalid Elgazzar</h2>
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/Research">Research</NavLink></li>
        <li><NavLink activeClassName="active" to="/Experience">Experience</NavLink></li>
        <li><NavLink activeClassName="active" to="/Awards">Awards</NavLink></li>
        <li><NavLink activeClassName="active" to="/Teaching">Teaching</NavLink></li>
        <li><NavLink activeClassName="active" to="/Publications">Publications</NavLink></li>
        <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;
