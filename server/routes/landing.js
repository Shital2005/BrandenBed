const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/landingData.json');
  fs.readFile(filePath, 'utf-8', (err, raw) => {
    if (err) {
      console.error('Error reading landingData.json:', err);
      return res.status(500).json({ error: 'Failed to load landing data.' });
    }
    try {
      const data = JSON.parse(raw);
      res.json(data);
    } catch (parseErr) {
      console.error('Error parsing landingData.json:', parseErr);
      res.status(500).json({ error: 'Failed to parse landing data.' });
    }
  });
});

module.exports = router;
