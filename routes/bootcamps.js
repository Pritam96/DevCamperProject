// importing express
const express = require('express');

// importing methods from controllers by destructuring

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();

// for url ('/') get & post
router.route('/').get(getBootcamps).post(createBootcamp);

// for url ('/:id') get single bootcamp & update bootcamp & delete bootcamp
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// exporting the router
module.exports = router;
