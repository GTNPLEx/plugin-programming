const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET clock information
router.get('/', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

// POST clock information
router.post('/', (req, res) => {
  const { time } = req.body;

  // Make a request to update the clock information
  axios
    .post('http://localhost:3000/api/ClockNews', { time })
    .then(response => {
      // Handle the response from the API
      res.json({ message: 'Clock information updated successfully' });
    })
    .catch(error => {
      // Handle errors from the API request
      console.error('Error updating clock information:', error);
      res.status(500).json({ error: 'Failed to update clock information' });
    });
});

module.exports = router;
