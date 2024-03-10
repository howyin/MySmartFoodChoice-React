import React from 'react';

function SignIn() 
{
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  return (
    <div className="sign-in-container">
        <form>
            <h1>Log In</h1>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}>
            </input>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}>
            </input>
        </form>
    </div>
  );
}

export default SignIn;