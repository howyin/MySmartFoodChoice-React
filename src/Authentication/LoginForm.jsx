// src/Authentication/LoginForm.jsx
import React from 'react';
import './LoginForm.css';

function LoginForm() 
{
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>
        <button type="submit">LOGIN</button>
        <a href="#" className="forgot-password">Forget Password?</a>
        <div className="divider">OR</div>
        <button type="button">Login as guest</button>
        <div className="signup-link">
          Need an Account? <a href="#">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;