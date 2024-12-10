// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
const passportConfig = require('./config/passport');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('dev')); 
// Enable CORS (React frontend and Node backend are on different ports)
app.use(cors({
    origin: 'http://localhost:4002',
    credentials: true
}));
passportConfig(passport);

const mongoURI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ecom-suite-db:27017/ecom-suite-db?authSource=admin`;
// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
