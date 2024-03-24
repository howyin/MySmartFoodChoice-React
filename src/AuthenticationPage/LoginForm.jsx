// src/Authentication/LoginForm.jsx
import React, { useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom'; // Import useHistory from react-router-dom
import './LoginForm.css';
import { auth } from '../Firebase/Firebase'; // Import the firebase auth instance

function LoginForm() 
{
  // for setting up the state for email and password
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const loginAsGuest = () => 
  {
    // TODO: this will link to that part?
    window.location.href = "/GuestPage";
  }

  const handleLogin = async () => 
  {
    try 
    {
      await signInWithEmailAndPassword(auth, email, password); // Use firebase signInWithEmailAndPassword method
      console.log("Login successful");
      console.log("Email: " + email);
      console.log("Password: " + password);

      const selectedType = document.getElementById('logInAs').value; // Get the selected value from the dropdown

      switch (selectedType) 
      {
        case 'user':
          // Handle login logic for user type

          break;
        case 'vendorDietitian':

          // Handle login logic for vendor (Dietitian) type
          break;
        case 'vendorTrainer':
          // Handle login logic for vendor (Trainer) type

          break;
        default:
          // Handle default case

          break;
      }
    } 
    catch (error) 
    {
      console.log("Login failed");
      console.error(error);
    }
  }
  
  return (
    
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-title'>Login</h2>
        <h3 className='email-container'>Email</h3>

        <div className="input-group"> 
          <input
              type="text"
              placeholder="Please enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <h3 className='password-container'>Password</h3>

        <div className="input-group">
          <input
              type="password"
              placeholder="Please enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="dropdown">
            <label htmlFor="logInAs">Log In As:</label>
            <select id="logInAs">
              <option value="user">User</option>
              <option value="vendorDietitian">Vendor (Dietitian)</option>
              <option value="vendorTrainer">Vendor (Trainer)</option>
            </select>
        </div>

        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>

        <button className='login-button' type="submit" onClick={handleLogin}>LOGIN</button>

        <a href="#" className="forgot-password">Forget Password?</a>

        <div className="divider">OR</div>

        

        <div className='signup-link'>
          <Link className="guest-login-link"
              to="#"
              onClick={loginAsGuest}>
              Login as guest
          </Link>
        </div>

        <div className="signup-link">
          Need an Account? <Link to="/SignUp">SIGN UP</Link>
        </div>
        
      </div>
    </div>
  );
}

export default LoginForm;