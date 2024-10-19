// frontend/src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/bookings', { name, date, type });
        setName('');
        setDate('');
        setType('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" placeholder="Test Type" value={type} onChange={(e) => setType(e.target.value)} required />
            <button type="submit">Book Test</button>
        </form>
    );
};

export default BookingForm;
