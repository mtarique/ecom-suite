const express = require('express'); 
const path = require('path'); 
const mongoose = require('mongoose'); 
const morgan = require('morgan'); 
require('dotenv').config(); 

const app = express(); 

// Connect to mongodb database
const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ecom-suite-db:27017/ecom-suite-db?authSource=admin`;
mongoose.set('strictQuery', true);
mongoose.connect(uri); 
mongoose.connection.on("error", err => console.log("MongoDB could not establish a connection: ", err)); 

app.use(express.json({limit: '50mb'})); 
app.use(express.urlencoded({limit: '50mb', extended: true})); 
app.use(express.static(path.join(__dirname, '/public'))); 

app.use(morgan('dev')); 

// Define a GET route to return a response
app.get('/', (req, res) => {
    res.json({message: "Server is running"});
});

// Fix the port definition and server listener
const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});