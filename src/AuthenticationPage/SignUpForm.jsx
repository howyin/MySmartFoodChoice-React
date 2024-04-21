import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebase'; // Adjust this import path to where your Firebase config and instances are defined
import './SignUpForm.css'; // Ensure the CSS file is correctly linked
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [userType, setUserType] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    setError('');

    try 
    {
      // Create user with email and password using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // we need to record the userID to record.
      // to use realtime database, use this var below.
      // const databaseRefUserAccount = DatabaseReference.ref('/User Accounts/{userId}');
      const user = userCredential.user;

      /*
      // Check how to test databaseRefUserAccount
      databaseRefUserAccount.once('value', (snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      });

      // Test for inputing a data inside of databaseRefUserAccount
      databaseRefUserAccount.set
      ({
        firstName,
        lastName,
        email,
        contactNumber,
        userType
      });

      */

      // the below is firestore not the realtime database
      // Store additional user details in Firestore under the 'users' collection
      await setDoc(doc(db, "users", user.uid), 
      {
        firstName,
        lastName,
        email, // Optional: Firebase Authentication already stores the email, but you might store it for easier querying
        contactNumber,
        userType
      });
      console.log("Account created and additional information stored successfully");
      navigate('/'); // Redirect to the homepage or dashboard after successful signup
    } catch (error) {
      setError(error.message); // Set the error state to display error message
      console.error("Error creating user account:", error);
    }
  };

  return (
    <div className="signup-form">
      <h2 className="signup-title">Sign Up</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
      <form onSubmit={handleSubmit}>
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
            type="email"
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

        {/* <div className="form-group">
          <label htmlFor="contactNumber" className="contact-container">Contact Number</label>
          <input
            type="text"
            placeholder="Please enter contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div> */}

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
      <p className="signup-link">Already have an account? <a href="/signin">Sign in</a></p>
    </div>
  );
}

export default SignUpForm;
