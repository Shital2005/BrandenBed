const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const tasksFile = path.join(__dirname, '../data/tasks.json');

// GET all tasks
router.get('/', (req, res) => {
  fs.readFile(tasksFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read tasks.' });
    try {
      const tasks = JSON.parse(data);
      res.json(tasks);
    } catch {
      res.status(500).json({ error: 'Invalid tasks data.' });
    }
  });
});

module.exports = router;
