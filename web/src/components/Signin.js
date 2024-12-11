import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    /*
    try {
      const response = await axios.post('http://localhost:4001/api/auth/login', { email, password }, { withCredentials: true });
      
      // Redirect to dashboard or another page
      const { token } = response.data;
      
      // Store JWT in localStorage
      localStorage.setItem('authToken', token);

      // Redirect to Dashboard
      navigate('/dashboard');

    } catch (error) {
      console.log("Login error ===> ", error)
      alert('Login failed, Please check your credentials.');
    }
      */

    try {
        const response = await axios.post('http://localhost:4001/api/user/login', { email, password }, { withCredentials: true });
        if (response.data.status) {
          // history.push('/dashboard');
          navigate('/dashboard'); 
        }
      } catch (err) {
        // setError(err.response ? err.response.data.message : 'An error occurred');
        alert('Login failed');
      }
  };

  return (
      <div className="container mt-5">
          <div className="d-flex justify-content-center align-items-center">
              <div className="card p-3" style={{ width: "24rem" }}>
                  <div className="card-header border-bottom-0 bg-white">
                      <h3 className="card-title">Sign in</h3>
                  </div>
                  <div className="card-body">
                      <form onSubmit={handleLogin} className="mb-3">
                          <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" value={email} className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} required />
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" value={password} className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} required />
                          </div>
                          <button type="submit" className="btn btn-primary">Login</button>
                      </form>
                      <p>Don't have and account? <Link to="/signup">Sign up</Link></p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default LoginForm;
