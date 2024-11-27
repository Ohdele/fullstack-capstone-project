import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GiftLink</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/app">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/search">Search</Link> {/* Added Search link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
