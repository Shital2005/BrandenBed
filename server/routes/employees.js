const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/employees.json');
  fs.readFile(filePath, 'utf-8', (err, raw) => {
    if (err) {
      console.error('Error reading employees.json:', err);
      return res.status(500).json({ error: 'Failed to load employees.' });
    }
    try {
      const data = JSON.parse(raw);
      res.json(data);
    } catch (parseErr) {
      console.error('Error parsing employees.json:', parseErr);
      res.status(500).json({ error: 'Failed to parse employees.' });
    }
  });
});

module.exports = router;
