import React, { useState } from 'react';

// Function to calculate the distance between two coordinates
const calculateDistance = (latlng1, latlng2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((latlng2.lat - latlng1.lat) * Math.PI) / 180;
  const dLon = ((latlng2.lng - latlng1.lng) * Math.PI) / 180;
  const lat1 = (latlng1.lat * Math.PI) / 180;
  const lat2 = (latlng2.lat * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

const DistanceCalculator = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [distance, setDistance] = useState(null);
  const [scaledDistance, setScaledDistance] = useState(null);

  const handleCalculateDistance = () => {
    const startCoords = start.split(',').map(Number);
    const endCoords = end.split(',').map(Number);

    if (startCoords.length === 2 && endCoords.length === 2) {
      const distance = calculateDistance(
        { lat: startCoords[0], lng: startCoords[1] },
        { lat: endCoords[0], lng: endCoords[1] }
      );
      setDistance(distance.toFixed(2));
      setScaledDistance((distance * 1.1).toFixed(2));
    } else {
      alert('Please enter valid coordinates (lat,lng) for both start and end.');
    }
  };

  return (
    <div>
      <h1>Distance Calculator</h1>
      <input
        type="text"
        placeholder="Start (lat,lng)"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="End (lat,lng)"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={handleCalculateDistance}>Calculate Distance</button>
      {distance !== null && (
        <div>
          <p>Distance: {distance} km</p>
          <p>Scaled Distance (1.1x): {scaledDistance} km</p>
        </div>
      )}
    </div>
  );
};

export default DistanceCalculator;
