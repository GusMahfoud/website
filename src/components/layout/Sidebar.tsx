import React from 'react';
import { FaHome, FaCar, FaTree, FaWrench, FaTv, FaGamepad, FaTshirt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><FaHome /> House Rentals</li>
          <li><FaCar /> Vehicles</li>
          <li><FaTree /> Landscaping Equipment</li>
          <li><FaWrench /> Utilities & Tools</li>
          <li><FaTv /> Appliances</li>
          <li><FaGamepad /> Entertainment</li>
          <li><FaTshirt /> Clothing</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
