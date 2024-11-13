const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// Fetch all guests
router.get('/', (req, res) => {
    const query = 'SELECT * FROM guests'; // Replace with your table name
    pool.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { guests: results }); // Pass the results to the view
    });
});

// Add a new guest
router.post('/', (req, res) => {
    const { guestName, guestDOB, guestPhone, guestEmail, guestAddress, noOfGuests } = req.body;
    const query = 'INSERT INTO guests (Guest_Name, DOB, Phone, Email, Address, No_of_Guests) VALUES (?, ?, ?, ?, ?, ?)';
    pool.query(query, [guestName, guestDOB, guestPhone, guestEmail, guestAddress, noOfGuests], (err, result) => {
        if (err) throw err;
        res.redirect('/guests'); // Redirect after POST
    });
});

module.exports = router;
