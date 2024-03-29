import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/" className="brand-logo">
        Mini projects
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li cy-data="home-nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todolist">Todo List</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
export default Navbar;
