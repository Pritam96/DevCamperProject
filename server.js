// importing express
const express = require('express');

// importing dotenv
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// initialize app variable using express
const app = express();

// creating routes

// get all
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
});

// get by id
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
});

// post
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'create new bootcamp' });
});

// update / put
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
});

// delete
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
});

// loading PORT from env or initialize a PORT
// if it not find the PORT value from env, it will initialize PORT with 5000
const PORT = process.env.PORT || 5000;

// in order to run server we need listen
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
