const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const queriesFile = path.join(__dirname, '../data/queries.json');

// GET all tenant queries
router.get('/', (req, res) => {
  fs.readFile(queriesFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read queries.' });
    try {
      const queries = JSON.parse(data);
      res.json(queries);
    } catch {
      res.status(500).json({ error: 'Invalid queries data.' });
    }
  });
});

module.exports = router;
