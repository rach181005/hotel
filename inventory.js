const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET route to fetch inventory
router.get('/', (req, res) => {
    const query = 'SELECT * FROM inventory';
    pool.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { inventory: results });
    });
});

// POST route to add new inventory item
router.post('/', (req, res) => {
    const { itemName, stock, price } = req.body;
    const query = 'INSERT INTO inventory (Item_Name, Stock, Price) VALUES (?, ?, ?)';
    pool.query(query, [itemName, stock, price], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Inventory item added successfully' });
    });
});

module.exports = router;
