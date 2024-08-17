import React from 'react';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <section className="welcome-section">
        <h1>Welcome to MOKRentals</h1>
        <p>Rent Anything, Anytime! From golf clubs to houses, MOKRentals connects you with the items you need.</p>
      </section>
      <section className="featured-rentals">
        <h2>Featured Rentals</h2>
        <div className="rentals-grid">
          <div className="rental-item">
            <img src="https://via.placeholder.com/300x200" alt="Luxury House" />
            <h3>Luxury House</h3>
            <p>From $200/night</p>
          </div>
          <div className="rental-item">
            <img src="https://via.placeholder.com/300x200" alt="SUV Rental" />
            <h3>SUV Rental</h3>
            <p>From $50/day</p>
          </div>
          <div className="rental-item">
            <img src="https://via.placeholder.com/300x200" alt="Lawnmower" />
            <h3>Lawnmower</h3>
            <p>From $15/day</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
