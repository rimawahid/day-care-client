import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-text">
  <div className="container">
  <Link className="navbar-brand text-logo" to="/">KIDS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ms-3 ps-5  active"  to="/">Home</Link>
        </li>
        
        <li className="nav-item ">
          <Link className="nav-link ms-3 ps-5 " to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link ms-3 ps-5 " to="/login">Login</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;