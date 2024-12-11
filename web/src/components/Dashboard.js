// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/user/protected', { withCredentials: true });

        // Log the response to see if we get the user data
      console.log("API Response: ", response);

      if (response.data && response.data.data) {
        setUserData(response.data.data); // Set the user data in the state
      } else {
        setUserData(null); // If no data is returned, explicitly set userData to null
      }
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      // Make an API call to the logout route
      await axios.post('http://localhost:4001/api/user/logout', {}, { withCredentials: true });

      // Clear the user data after logging out
      setUserData(null);
      return <Navigate to="/signin" />;
    } catch (err) {
      console.error("Logout failed:", err);
      // Optionally handle logout failure
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    // return <Redirect to="/login" />;
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <h2>Welcome, {userData.name}</h2>
      <p>Your email is: {userData.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
