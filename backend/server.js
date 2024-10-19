// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let bookings = []; // Temporary storage for bookings

// Route to get all bookings
app.get('/api/bookings', (req, res) => {
    res.json(bookings);
});

// Route to create a new booking
app.post('/api/bookings', (req, res) => {
    const newBooking = req.body;
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
