const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const validator = require('validator');

// Signup user
exports.signup = async (req, res) => {
    try {
        // Check email and password exist and provide more specific feedback
        if (!req.body.email && !req.body.password) {
            return res.status(400).json({ status: false, message: "Email and password are required" });
        } 

        if (!req.body.email) {
            return res.status(400).json({ status: false, message: "Email is required" });
        }

        if (!req.body.password) {
            return res.status(400).json({ status: false, message: "Password is required" });
        }

        // Validate email format
        if (!validator.isEmail(req.body.email)) {
            return res.status(400).json({ status: false, message: "Invalid email format" });
        }

        // Define the options for strong password criteria
        const passwordOptions = {
            minLength: 8,         // Minimum length of 8 characters
            minLowercase: 1,      // At least one lowercase letter
            minUppercase: 1,      // At least one uppercase letter
            minNumbers: 1,        // At least one number
            minSymbols: 1,        // At least one symbol (e.g., !, @, #, etc.)
            returnScore: false    // Return true/false instead of score
        };

        if (!validator.isStrongPassword(req.body.password, passwordOptions)) {
            return res.status(400).json({ status: false, message: "Password is too weak. It must include at least 8 characters, one uppercase letter, one lowercase letter, one number, and one symbol." });
        }

        // Check if user already exists
        const existingUser = await User.findOne({email: req.body.email}); 
        if (existingUser) {
            return res.status(409).json({status: false, message: "User with this email already exists"})
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        req.body.password = hashedPassword;

        // Create a new user
        const user = new User(req.body);

        // Save the user to the database
        await user.save();

        // Password matched
        const payload = {
            id: user._id, 
            name: user.name, 
            email: user.email, 
        }

        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'}); 
        // Set HttpOnly cookie with JWT
        res.cookie('token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            // sameSite: 'Lax',
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({status: true, message: "Account created and login successful", data: {user: payload, token: jwtToken}})
    } catch (error) {
        console.log(error)
        res.status(500).json({status: false, message: 'An error occurred', error: error})
    }
}

// Login user
exports.login = async (req, res) => {
    try {
        // Check email and password exist and provide more specific feedback
        if (!req.body.email) {
            return res.status(400).json({ status: false, message: "Email is required" });
        }

        if (!req.body.password) {
            return res.status(400).json({ status: false, message: "Password is required" });
        }

        // Validate email format
        if (!validator.isEmail(req.body.email)) {
            return res.status(400).json({ status: false, message: "Invalid email format" });
        }

        // Check if user already exists
        const user = await User.findOne({email: req.body.email}); 
        if (!user) {
            return res.status(404).json({status: false, message: "Account does not exist"})
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
            // Password matched
            const payload = {
                id: user._id, 
                name: user.name, 
                email: user.email, 
            }

            const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'}); 

            // Set HttpOnly cookie with JWT
            res.cookie('token', jwtToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                // sameSite: 'Lax',
                maxAge: 24 * 60 * 60 * 1000
            });

            return res.status(200).json({status: true, message: "Login successful", data: {user: payload, token: jwtToken}})
        } else {
            return res.status(401).json({status: false, message: "Invalid email or password" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({status: false, message: 'An error occurred', error: error})
    }
}

exports.logout = (req, res) => {
    // Clear the JWT token cookie
    res.clearCookie('token', {
      httpOnly: true, // Ensure cookie is HTTP-only for security
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      path: '/' // Clear the cookie for the entire domain
    });
  
    return res.status(200).json({ staus: true, message: 'Successfully logged out' });
  };