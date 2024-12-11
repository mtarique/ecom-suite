import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const token = localStorage.getItem('authToken');

  // // Decode the JWT to get the user data
  // const user = token ? jwtDecode(token) : null;

  // const handleLogout = () => {
  //   localStorage.removeItem('authToken'); // Clear token
  //   navigate('/signin'); // Redirect to login page
  // };

  // if (!user) {
  //   navigate('/signin'); // Redirect to login if not authenticated
  //   return null;
  // }

  useEffect(() => {
    // Fetch user details from /me route using Axios
    const fetchUserDetails = async () => {
      try {
        const response = await axios.post('http://localhost:4001/api/auth/protected', {
          withCredentials: true, // Include cookies (HTTP-only cookies)
        });

        console.log(response); 
        setUser(response.user); // Set user details in state
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
    </div>
  );
};

const Dashboard1 = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  // Decode the JWT to get the user data
  const user = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token
    navigate('/signin'); // Redirect to login page
  };

  if (!user) {
    navigate('/signin'); // Redirect to login if not authenticated
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;