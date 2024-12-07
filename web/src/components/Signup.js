// components/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // To navigate after successful signup

const Signup = () => {
  // State to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const history = useHistory(); // Hook for navigation

  // Handle the signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/signup', { username, password });
      alert('Signup successful!');
      // Redirect to login or another page
      history.push('/login'); // Redirect to login page after successful signup
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
