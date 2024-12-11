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
const userRoutes = require('./routes/user'); 
const passportConfig = require('./config/passport');
const cookieParser = require('cookie-parser');


dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('dev')); 
app.use(cookieParser()); // This needs to be added before your routes/middleware
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
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
