const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET route to fetch events
router.get('/', (req, res) => {
    const query = 'SELECT * FROM event';
    pool.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { events: results });
    });
});

// POST route to add new event
router.post('/', (req, res) => {
    const { eventName, date, venue } = req.body;
    const query = 'INSERT INTO event (Event_Name, Date, Venue) VALUES (?, ?, ?)';
    pool.query(query, [eventName, date, venue], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Event added successfully' });
    });
});

module.exports = router;
