const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET route to fetch reservations
router.get('/', (req, res) => {
    const query = 'SELECT * FROM reservation';
    pool.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { reservations: results });
    });
});

// POST route to add new reservation
router.post('/', (req, res) => {
    const { guestId, roomId, checkInDate, checkOutDate, bookingMoney } = req.body;
    const query = 'INSERT INTO reservation (Guest_ID, Room_ID, Check_in_Date, Check_out_Date, Booking_Money) VALUES (?, ?, ?, ?, ?)';
    pool.query(query, [guestId, roomId, checkInDate, checkOutDate, bookingMoney], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Reservation added successfully' });
    });
});

module.exports = router;
