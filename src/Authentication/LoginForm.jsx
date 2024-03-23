// src/Authentication/LoginForm.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() 
{
  // for setting up the state for email and password
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  
  const loginAsGuest = () => 
  {
    // TODO: login as guest here
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
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>

        <button className='login-button' type="submit">LOGIN</button>

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