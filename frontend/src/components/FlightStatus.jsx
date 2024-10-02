// src/components/FlightStatus.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FlightStatus = () => {
    const [pnr, setPnr] = useState('');
    const [flightData, setFlightData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/flights/status/${pnr}`);
            setFlightData(response.data);
        } catch (err) {
            setError('Flight not found or an error occurred.');
        }
    };

    return (
        <div>
            <h2>Check Flight Status</h2>
            <input 
                type="text" 
                value={pnr} 
                onChange={(e) => setPnr(e.target.value)} 
                placeholder="Enter PNR" 
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {flightData && (
                <div>
                    <h3>Flight Details</h3>
                    <p>PNR: {flightData.pnr}</p>
                    <p>Status: {flightData.status}</p>
                    <p>Departure Time: {new Date(flightData.departureTime).toLocaleString()}</p>
                    <p>Destination: {flightData.destination}</p>
                </div>
            )}
        </div>
    );
};

export default FlightStatus;
