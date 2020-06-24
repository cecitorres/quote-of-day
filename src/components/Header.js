import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="active">QOD</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/quotes" className="nav-link" activeClassName="active">Search</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/favoriteQuotes" className="nav-link" activeClassName="active">Fav</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;