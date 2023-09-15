// Import required modules
// const express = require('express');
import express from 'express';
const app = express();
const bodyParser = require('body-parser');

// Set up body parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import cars router
const cars_router = require('./Controllers/cars_router');
const users_router = require('./Controllers/users_router');

// Use the cars_router for URL that starts with 'Cars'
app.use('/Cars', cars_router);

// Use the user_router for URL that starts with 'User'
app.use('/User', users_router);

// Define a default route
app.get('/', (_req: any, res:any) => {
  res.send("I'm Alive!");
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});