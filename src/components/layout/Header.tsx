import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for Rentals..."
      />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <div
          className={`dropdown-trigger ${dropdownOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          Categories
        </div>
        <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
          <Link to="/categories/category1">Category 1</Link>
          <Link to="/categories/category2">Category 2</Link>
          <Link to="/categories/category3">Category 3</Link>
        </div>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
