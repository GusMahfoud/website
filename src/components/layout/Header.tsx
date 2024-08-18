import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for Rentals..."
      />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
