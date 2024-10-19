// frontend/src/App.js
import React from 'react';
import BookingForm from './components/BookingForm';
import TestList from './components/TestList';

const App = () => {
    return (
        <div>
            <h1>Medical Booking App</h1>
            <BookingForm />
            <TestList />
        </div>
    );
};

export default App;
