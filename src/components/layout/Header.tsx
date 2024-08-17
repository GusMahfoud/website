import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <input className="search-bar" type="text" placeholder="Search for Rentals..." />
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Contact Us</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  );
};

export default Header;
