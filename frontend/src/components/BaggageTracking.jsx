// src/components/BaggageTracking.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BaggageTracking = () => {
    const [tag, setTag] = useState('');
    const [baggageData, setBaggageData] = useState(null);
    const [error, setError] = useState('');

    const handleTrack = async () => {
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/baggage/${tag}`);
            setBaggageData(response.data);
        } catch (err) {
            setError('Baggage not found or an error occurred.');
        }
    };

    return (
        <div>
            <h2>Track Baggage</h2>
            <input 
                type="text" 
                value={tag} 
                onChange={(e) => setTag(e.target.value)} 
                placeholder="Enter Baggage Tag" 
            />
            <button onClick={handleTrack}>Track</button>
            {error && <p>{error}</p>}
            {baggageData && (
                <div>
                    <h3>Baggage Details</h3>
                    <p>Tag: {baggageData.tag}</p>
                    <p>Status: {baggageData.status}</p>
                    <p>Flight: {baggageData.flight}</p>
                </div>
            )}
        </div>
    );
};

export default BaggageTracking;
