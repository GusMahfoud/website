import '../../styles/RentalDisplay.css'

const RentalDisplay: React.FC = () => {
    return (
      <section className="featured-rentals">
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
    );
}

export default RentalDisplay