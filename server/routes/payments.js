const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const paymentsFile = path.join(__dirname, '../data/payments.json');

// GET all payments
router.get('/', (req, res) => {
  fs.readFile(paymentsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read payments.' });
    try {
      const payments = JSON.parse(data);
      res.json(payments);
    } catch {
      res.status(500).json({ error: 'Invalid payments data.' });
    }
  });
});

// POST new payment
router.post('/', (req, res) => {
  const newPayment = req.body;
  fs.readFile(paymentsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read payments.' });
    let payments = [];
    try {
      payments = JSON.parse(data);
    } catch {
      payments = [];
    }
    payments.push(newPayment);
    fs.writeFile(paymentsFile, JSON.stringify(payments, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to save payment.' });
      res.status(201).json(newPayment);
    });
  });
});

module.exports = router;
