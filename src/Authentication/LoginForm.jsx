// src/Authentication/LoginForm.jsx
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


import './LoginForm.css';

function LoginForm() 
{
  {/* this one we need to bind the value to the state, 
      '' stands for string specify the type in argument */}

  const [username, setUsername] = useState(''); {/* username, this is a comment */}
  const [password, setPassword] = useState(''); {/* password */}
  const [rememberMe, setRememberMe] = useState(false); {/* rememberMe */}

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-title'>Login</h2>

        <h3 className='username-container'>Username</h3>

        <div className="input-group"> 
          <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </div>

        <h3 className='password-container'>Password</h3>

        <div className="input-group">
          <input
              type="password"
              placeholder="Password"
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

        <button className='guest-login-button' type="button">Login as guest</button>

        <div className="signup-link">
          Need an Account? <a href="#">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;