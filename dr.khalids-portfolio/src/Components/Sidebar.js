import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Dr. Khalid Elgazzar</h1>
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/Papers">Research Papers</NavLink></li>
        <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;
