import React, { useState } from 'react';
import axios from 'axios';

const DisruptionManagement = () => {
  const [pnr, setPnr] = useState('');
  const [action, setAction] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleDisruption = async () => {
    try {
      const response = await axios.post(`/api/flights/disruption/${pnr}`, { action });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('Error handling disruption:', error);
      setResponseMessage('Error handling disruption');
    }
  };

  return (
    <div className="disruption-management">
      <h2>Handle Flight Disruption</h2>
      <input
        type="text"
        placeholder="Enter PNR"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
      />
      <input
        type="text"
        placeholder="Action (e.g., rebook, refund)"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      />
      <button onClick={handleDisruption}>Handle Disruption</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default DisruptionManagement;
