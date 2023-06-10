// importing mongoose module
const mongoose = require('mongoose');

// creating function for mongoose connection
// mongoose.connect() returns a promise
// we can use async await, so we are creating a a async function
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    // options to stop some warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // console log the host
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

// exporting the function
module.exports = connectDB;
