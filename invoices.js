const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET route to fetch invoices
router.get('/', (req, res) => {
    const query = 'SELECT * FROM invoice';
    pool.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { invoices: results });
    });
});

// POST route to add new invoice
router.post('/', (req, res) => {
    const { reservationId, totalAmount, invoiceDate } = req.body;
    const query = 'INSERT INTO invoice (Reservation_ID, Total_Amount, Invoice_Date) VALUES (?, ?, ?)';
    pool.query(query, [reservationId, totalAmount, invoiceDate], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Invoice added successfully' });
    });
});

module.exports = router;
