// importing express
const express = require('express');

const router = express.Router();

// creating routes

// get all
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
});

// get by id
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
});

// post
router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'create new bootcamp' });
});

// update / put
router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
});

// delete
router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
});

// exporting the router
module.exports = router;
