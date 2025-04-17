import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = ({ switchToSignup }) => {
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaAnswer !== '8') {
      alert('Captcha incorrect!');
    } else {
      alert('Login submitted!');
      // Add login logic here
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <div className="captcha">
            <label>Captcha: 5 + 3 = ?</label>
            <input
              type="text"
              placeholder="Enter answer"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/Signup" onClick={switchToSignup}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;