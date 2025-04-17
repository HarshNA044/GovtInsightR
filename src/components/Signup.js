import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = ({ switchToLogin }) => {
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [idOption, setIdOption] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaAnswer !== '5') {
      alert('Captcha incorrect!');
    } else {
      alert('Signup submitted!');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <div className="verify-option">
            <label>Verification Type:</label><br />
            <label>
              <input
                type="radio"
                name="idOption"
                value="aadhaar"
                checked={idOption === 'aadhaar'}
                onChange={() => setIdOption('aadhaar')}
              /> Aadhaar
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="idOption"
                value="pan"
                checked={idOption === 'pan'}
                onChange={() => setIdOption('pan')}
              /> PAN Card
            </label>
          </div>

          {idOption === 'aadhaar' && (
            <input
              type="text"
              placeholder="Enter Aadhaar Number"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              required
            />
          )}

          {idOption === 'pan' && (
            <input
              type="text"
              placeholder="Enter PAN Number"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              required
            />
          )}

          <div className="captcha">
            <label>Captcha: 7 - 2 = ?</label>
            <input
              type="text"
              placeholder="Enter answer"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/Login" onClick={switchToLogin}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;