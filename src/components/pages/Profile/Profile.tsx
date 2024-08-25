import React from "react";
import "./Profile.css";
import RentalDisplay from "../../common/RentalDisplay";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <h2>Personal Information</h2>
        <div className="info-item">
          <span className="label">Name:</span>
          <span className="value">John Doe</span>
        </div>
        <div className="info-item">
          <span className="label">Email:</span>
          <span className="value">johndoe@example.com</span>
        </div>
        <div className="info-item">
          <span className="label">Phone:</span>
          <span className="value">(123) 456-7890</span>
        </div>
        <div className="info-item">
          <span className="label">Address:</span>
          <span className="value">123 Main St, Anytown, USA</span>
        </div>
        <button className="update-button">Update Profile</button>
      </div>

      <div className="rental-history">
        <h2>Rental History</h2>
        <RentalDisplay />
      </div>
    </div>
  );
};

export default Profile;
