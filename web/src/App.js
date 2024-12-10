import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Layout from "./components/Layout";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/dashboard" element={<Dashboard />} />
					</Route>
	
					<Route exact path="/signup" element={<div className="container"><Signup /></div>} />
					<Route exact path="/signin" element={<div className="container"><Signin /></div>} />

				</Routes>
			</BrowserRouter>
		</div>
	);
};

// function App() {
    // return (
    //   <Layout>
    //     <h1>Welcome to MyApp</h1>
    //     <p>This is a simple template with a header, footer, and layout using Bootstrap 5.</p>
    //   </Layout>
    // );

    // return (
          
    //     <Switch>
    //       <Route exact path="/signup" component={Signup} />
    //     </Switch>
      
    // );
  // }

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//     alert("Signup Successful!");
//     // Reset form
//     setFormData({ name: "", email: "", password: "" });
//   };

//   return (
//     <Layout>
//     <div className="App">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//     </Layout>
//   );
// }

export default App;
