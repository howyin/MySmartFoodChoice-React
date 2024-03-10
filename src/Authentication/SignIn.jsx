import React from 'react';


function SignIn() 
{
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="sign-in-container">
        <form>
            <h1>Log In</h1>
            <input type="email" placeholder="Enter your email" value={email} />
            <input type="password" placeholder="Enter your password" value={password} />
        </form>
    </div>
  );

}
export default SignIn;