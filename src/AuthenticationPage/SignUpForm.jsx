import React, { useState } from 'react';
import './SignUpForm.css'; // Import the CSS file for the form styles

function SignUpForm() {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [userType, setUserType] = useState('user');

  // href can be used.
  return (
    <div className="signup-form">
      <h2 className="signup-title">Sign Up</h2>

      <form>
        <div className="form-group">
          <label className="username-container">First Name</label>
          <input
            type="text"
            placeholder="Please enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="username-container">Last Name</label>
          <input
            type="text"
            placeholder="Please enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="email-container">Email</label>
          <input
              type="text"
              placeholder="Please enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="password-container">Password</label>
          <input
              type="password"
              placeholder="Please enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber" className="contact-container">Contact Number</label>
          <input
              type="text"
              placeholder="Please enter contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="userType" className="user-type-container">User Type</label>
          <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="user">User</option>
            <option value="vendorDietitian">Vendor (Dietitian)</option>
            <option value="vendorTrainer">Vendor (Trainer)</option>
          </select>
        </div>

        <button className="button" type="submit">Sign Up</button>
    
      </form>
      <p className="signup-link">Already have an account? 
          <a href="/">Sign in</a>
      </p>
    </div>
  );
}

export default SignUpForm;