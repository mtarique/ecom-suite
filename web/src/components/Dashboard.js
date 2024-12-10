import React from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Dashboard = () => {
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