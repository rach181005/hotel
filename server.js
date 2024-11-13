const mysql = require('mysql');
const express = require('express');
const app = express();
const router=require("./routes/events")
const port = 3000;

// Set up the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // change if needed
  password: 'rachel',  // your MySQL password
  database: 'hotel',  // your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/events",router)

// Server setup
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
