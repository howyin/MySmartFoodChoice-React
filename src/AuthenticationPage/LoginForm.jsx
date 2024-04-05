import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { auth } from '../Firebase/Firebase'; // Ensure this path is correct for your Firebase configuration

function LoginForm() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Added back userType state
  const navigate = useNavigate(); // Initialize navigate hook for programmatically navigating

  // Handle form submission for login
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      await signInWithEmailAndPassword(auth, email, password); // Attempt to sign in with email and password
      console.log("Login successful");

      // Navigate to different pages based on user type
      switch(userType) {
        case 'user':
          navigate('/'); // Adjust as necessary
          break;
        case 'vendorDietitian':
          navigate('/dietitianDashboard'); // Adjust as necessary
          break;
        case 'vendorTrainer':
          navigate('/trainerDashboard'); // Adjust as necessary
          break;
        default:
          navigate('/'); // Default navigation
      }

    } catch (error) {
      console.error("Login failed:", error.message); // Log any error
      // Consider setting an error state here to display the error message to the user
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-title'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className='email-container'>Email</label>
            <input
                type="email"
                placeholder="Please enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className='password-container'>Password</label>
            <input
                type="password"
                placeholder="Please enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="dropdown">
            <label htmlFor="logInAs">Log In As:</label>
            <select id="logInAs" value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="user">User</option>
              <option value="vendorDietitian">Vendor (Dietitian)</option>
              <option value="vendorTrainer">Vendor (Trainer)</option>
            </select>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me?</label>
          </div>

          <button className='login-button' type="submit">LOGIN</button>
        </form>

        <a href="#" className="forgot-password">Forget Password?</a>

        <div className="divider">OR</div>

        <div className='signup-link'>
          Need an Account? <Link to="/SignUp">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
