import React from 'react';
import { Link } from 'react-router-dom';
import './Guest.css';

function Guest() {
  return (
    <div className="guest-container">
      <h2>Welcome, Guest!</h2>
      <div className="guest-buttons">
        <button onClick={() => console.log('Record Meal')}>Record Meal</button>
        <button onClick={() => console.log('View Meal History')}>View Meal History</button>
        <button onClick={() => console.log('View Food Recipes')}>View Food Recipes</button>
      </div>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
      <div className="back-button">
        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
  );
}

export default Guest;

