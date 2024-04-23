import React from 'react';
import { Link } from 'react-router-dom';
import './Guest.css';

function Guest() {
  return (
    <div className="guest-container">
      <h2>Welcome, Guest!</h2>
      <div className="guest-buttons">
        <button onClick={() => console.log("Navigate to Record Meal page")}>Record Meal</button>
        <button onClick={() => console.log("Navigate to View Meal History page")}>View Meal History</button>
        <button onClick={() => console.log("Navigate to View Food Recipes page")}>View Food Recipes</button>
      </div>
      <p className="signup-link">Want to Sign Up? <Link to="/signup">Click Here</Link></p>
    </div>
  );
}

export default Guest;

