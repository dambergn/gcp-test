require('dotenv').config // Load environment variables from .env file
// const dotenv = require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic route for the web server
app.get('/', (req, res) => {
    res.send('Hello World! This is a basic Node.js web server.');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is an example API response',
        status: 'success'
    };
    res.json(data);
});

// POST request example
app.post('/api/postdata', (req, res) => {
    // Access the request body sent from client
    console.log(req.body);
    
    const response = {
        message: 'Data received successfully',
        receivedData: req.body,
        status: 'success'
    };
    res.json(response);
});

// Start the server
console.log("PORT:", process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});