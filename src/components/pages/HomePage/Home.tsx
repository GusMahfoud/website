import React from "react";
import "./Home.css";
import RentalDisplay from "../../common/RentalDisplay";

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="welcome-section">
        <h1>Welcome to MOKRentals</h1>
        <p>
          Rent Anything, Anytime! From golf clubs to houses, MOKRentals connects
          you with the items you need.
        </p>
      </section>
      <h2>Featured Rentals</h2>
      <RentalDisplay />
    </div>
  );
};

export default Home;
