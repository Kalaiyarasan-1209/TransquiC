import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAuth } from './AuthContext';
import './GeoCode.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link if using react-router-dom

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const FitBounds = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50] }); // Optional padding for better view
    }
  }, [bounds, map]);
  return null;
};

const GeocodeAndDistance = () => {
  const { bookingDetails, setPrice, setDistance, setTime } = useAuth(); // Access setDistance and setTime from context
  const [location1, setLocation1] = useState(null);
  const [location2, setLocation2] = useState(null);
  const [distance, setDistanceState] = useState(null);
  const [route, setRoute] = useState([]);
  const [error, setError] = useState(null);
  const [dmDistance, setDmDistance] = useState(null);
  const [dmDuration, setDmDuration] = useState(null);

  const OPC_API_KEY = 'eeef7566f50d4847bd52159c831f47a1'; // Replace with your actual OpenCage API key
  const TOMTOM_API_KEY = 'dokWlQpddAm3bdEfoFAuMnhus6AXdf1G'; // Replace with your actual TomTom API key
  const DISTANCEMATRIX_API_KEY = 'pu3f4imNIo4LDDAbr2p6KpKwggOSfRyi0fAfmqfE0hiwG5UazNTodCAUXyfrsc0O'; // Replace with your actual DistanceMatrix.ai API key

  const getCoordinates = async (address) => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
        params: {
          q: address,
          key: OPC_API_KEY,
        },
      });

      if (response.data.results.length > 0) {
        return response.data.results[0].geometry;
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error fetching geocode data:', error);
      throw error;
    }
  };

  const handleCalculateDistance = async () => {
    if (!bookingDetails) {
      alert('Booking details not available.');
      return;
    }

    const { from, to } = bookingDetails;

    try {
      const coords1 = await getCoordinates(from);
      setLocation1(coords1);

      if (!to) {
        // Only display the location for 'from'
        setLocation2(null);
        setDistanceState(null);
        setRoute([]);
        setDmDistance(null);
        setDmDuration(null);
        setError(null);

        // Calculate the price based on duration if to is empty
        const price = bookingDetails.duration * 100;
        setPrice(price.toFixed(2)); // Update price in context
        setDistance(null); // Set distance to null in context
        setTime(null); // Set time to null in context
      } else {
        const coords2 = await getCoordinates(to);
        setLocation2(coords2);

        const tomtomResponse = await axios.get(`https://api.tomtom.com/routing/1/calculateRoute/${coords1.lat},${coords1.lng}:${coords2.lat},${coords2.lng}/json`, {
          params: {
            key: TOMTOM_API_KEY,
            travelMode: 'car',
          },
        });

        if (tomtomResponse.data.routes && tomtomResponse.data.routes.length > 0) {
          const routeCoordinates = tomtomResponse.data.routes[0].legs[0].points.map(point => ({
            lat: point.latitude,
            lng: point.longitude,
          }));
          setRoute(routeCoordinates);

          const distanceInMeters = tomtomResponse.data.routes[0].summary.lengthInMeters; // Distance in meters
          const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
          setDistanceState(distanceInKm.toFixed(2));
          setError(null);
        } else {
          throw new Error('No routes found');
        }

        const dmResponse = await axios.get(`https://api.distancematrix.ai/maps/api/distancematrix/json`, {
          params: {
            origins: `${coords1.lat},${coords1.lng}`,
            destinations: `${coords2.lat},${coords2.lng}`,
            key: DISTANCEMATRIX_API_KEY,
          },
        });

        if (dmResponse.data.rows && dmResponse.data.rows.length > 0) {
          const dmDistanceInMeters = dmResponse.data.rows[0].elements[0].distance.value; // Distance in meters
          const dmDistanceInKm = dmDistanceInMeters / 1000; // Convert to kilometers
          setDmDistance(dmDistanceInKm.toFixed(2));
          setDistance(dmDistanceInKm.toFixed(2)); // Update distance in context

          const dmDurationInSeconds = dmResponse.data.rows[0].elements[0].duration.value; // Duration in seconds
          const dmDurationInMinutes = dmDurationInSeconds / 60; // Convert to minutes
          setDmDuration(dmDurationInMinutes.toFixed(2));
          setTime(dmDurationInMinutes.toFixed(2)); // Update time in context
          setError(null);

          // Calculate the price
          const priceFromDistance = 50 * dmDistanceInKm; // Price from distance
          const priceFromDuration = 20 * dmDurationInMinutes; // Price from duration
          const finalPrice = Math.max(priceFromDistance, priceFromDuration); // Greatest value
          setPrice(finalPrice.toFixed(2)); // Update price in context
        } else {
          throw new Error('No routes found');
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLocation1(null);
      setLocation2(null);
      setDistanceState(null);
      setRoute([]);
      setDmDistance(null);
      setDmDuration(null);
      setError('Error fetching data. Please try again.');
    }
  };

  useEffect(() => {
    handleCalculateDistance();
  }, [bookingDetails]); // Run the calculation whenever bookingDetails change

  const bounds = location1 ? (location2 ? [[location1.lat, location1.lng], [location2.lat, location2.lng]] : [[location1.lat, location1.lng]]) : [];

  return (
    <div className="paper">
      <h1 className="no-print">Check the details</h1>
      {location1 && (
        <div>
          {location2 && <p>Distance: {dmDistance} km</p>}
          {location2 && <p>Duration: {dmDuration} minutes</p>}
          <div className="map-container">
            <MapContainer className="print-map" style={{ height: "50vh", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {location1 && <Marker position={location1} />}
              {location2 && <Marker position={location2} />}
              {route.length > 0 && <Polyline positions={route} />}
              {bounds.length > 0 && <FitBounds bounds={bounds} />}
            </MapContainer>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="button-container no-print">
        <Button variant="contained" color="primary" onClick={handleCalculateDistance} style={{ marginRight: '10px' }}>
          Recalculate Distance
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/BookingSelection">
          Category
        </Button>
      </div>
    </div>
  );
};

export default GeocodeAndDistance;
