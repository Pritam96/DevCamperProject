// importing express
const express = require('express');

// importing dotenv
const dotenv = require('dotenv');

// importing middleware files
// const logger = require('./middleware/logger');

// importing logger morgan
const morgan = require('morgan');

// route files
const bootcamps = require('./routes/bootcamps');

// load env vars
dotenv.config({ path: './config/config.env' });

// initialize app variable using express
const app = express();

// for using the following middleware
// app.use(logger);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps);

// loading PORT from env or initialize a PORT
// if it not find the PORT value from env, it will initialize PORT with 5000
const PORT = process.env.PORT || 5000;

// in order to run server we need listen
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
