// server.js or app.js
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const User = require('./models/User'); // Import User model

const app = express();

// Connect to MongoDB (make sure to replace the URL with your own MongoDB connection string)
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ecom-suite-db:27017/ecom-suite-db?authSource=admin`)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev')); 

// Enable CORS (React frontend and Node backend are on different ports)
app.use(cors({
    origin: 'http://localhost:4002',
    credentials: true
}));

// Setup session
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Configure Passport.js for local authentication
const LocalStrategy = require('passport-local').Strategy;

// Passport Local Strategy
passport.use(new LocalStrategy(
    async (email, password, done) => {
        try {
            // Find the user by email
            const user = await User.findOne({ email });
            // console.log(user)
            if (!user) {
                console.log("User not found")
                return done(null, false, { message: 'Incorrect username.' });
            }

            // Compare the password
            const isMatch = await user.comparePassword(password);
            if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

            return done(null, user); // Successful authentication
        } catch (err) {
            console.log(err)
            return done(err);
        }
    }
));

// Serialize and Deserialize User
passport.serializeUser((user, done) => done(null, user.id)); // Store user ID in session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user); // Fetch user data when deserializing
    } catch (err) {
        done(err);
    }
});

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering user');
    }
});

// Login Route
app.post('/login-1', passport.authenticate('local', {
    successRedirect: '/dashboard',
    // failureRedirect: 'http://localhost:4002'
    failureRedirect: '/login',
}));

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // console.log("Error ==========> " , err);
        // console.log("User ==========> " , user);
        // console.log("Info ==========> " , info);

        if (err) {
            // Handle errors and send an error response
            return res.status(500).json({ success: false, message: 'Internal Server Error', error: err });
        }
        if (!user) {
            // Send a response on authentication failure
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        req.logIn(user, (err) => {
            if (err) {
                // Handle login errors
                return res.status(500).json({ success: false, message: 'Login failed', error: err });
            }
            // Send a success response with user details or token
            return res.status(200).json({
                success: true,
                message: 'Login successful',
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name, // Include any user details you want to expose
                },
            });
        });
    });
});

// Dashboard Route (Protected)
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      res.send(`Welcome, ${req.user.email}`); // Show user data
    } else {
      res.status(401).send('Unauthorized');
    }
});

// Logout Route
app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).send('Error logging out');
      }
      res.redirect('/');
    });
});

// Define a GET route to return a response
app.get('/', (req, res) => {
    res.json({message: "Server is running on 3000"});
});

// Fix the port definition and server listener
const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is successfully running on port ${port}`);
});
  

