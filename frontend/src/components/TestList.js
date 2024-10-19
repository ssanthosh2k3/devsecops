// frontend/src/components/TestList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const res = await axios.get('http://localhost:5000/api/bookings');
            setBookings(res.data);
        };

        fetchBookings();
    }, []);

    return (
        <ul>
            {bookings.map((booking, index) => (
                <li key={index}>{booking.name} - {booking.date} - {booking.type}</li>
            ))}
        </ul>
    );
};

export default TestList;
