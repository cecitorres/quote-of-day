import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <>
    <div className="header-nav"></div>
    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link " activeClassName="active">QOD</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/quotes" className="nav-link" activeClassName="active">SEARCH</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/favoriteQuotes" className="nav-link" activeClassName="active">FAV</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;