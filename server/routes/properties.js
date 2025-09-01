const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/properties.json');
  fs.readFile(filePath, 'utf-8', (err, raw) => {
    if (err) {
      console.error('Error reading properties.json:', err);
      return res.status(500).json({ error: 'Failed to load properties.' });
    }
    try {
      const data = JSON.parse(raw);
      res.json(data);
    } catch (parseErr) {
      console.error('Error parsing properties.json:', parseErr);
      res.status(500).json({ error: 'Failed to parse properties.' });
    }
  });
});

module.exports = router;
