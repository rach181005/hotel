const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET route to fetch suppliers
router.get('/', (req, res) => {
    const query = 'SELECT * FROM supplier';
    pool.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { suppliers: results });
    });
});

// POST route to add new supplier
router.post('/', (req, res) => {
    const { supplierName, contactInfo } = req.body;
    const query = 'INSERT INTO supplier (Supplier_Name, Contact_Info) VALUES (?, ?)';
    pool.query(query, [supplierName, contactInfo], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Supplier added successfully' });
    });
});

module.exports = router;
