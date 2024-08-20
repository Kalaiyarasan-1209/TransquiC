import React, { useState } from "react";
import './Booking.css';
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [passengers, setPassengers] = useState(1);
    const [duration, setDuration] = useState(1);

    const { setBookingDetails, setPrice } = useAuth(); // Destructure setBookingDetails and setPrice from useAuth

    const navigate = useNavigate();

    const handleClick = (option) => {
        setSelectedOption(option);
        if (option === 'By the Hour') {
            setTo("");
        }
    };

    const handleInterchange = () => {
        setFrom(to);
        setTo(from);
    };

    const handleSearch = () => {
        let price = 0;

        if (!to) {
            price = duration * 100;
        } else {
            // Calculate price based on other criteria if necessary
        }

        setPrice(price); // Save price using setPrice

        const bookingDetails = {
            selectedOption,
            from,
            to,
            pickupDate,
            pickupTime,
            passengers,
            duration,
            price
        };
        setBookingDetails(bookingDetails); // Save bookingDetails to context
        console.log(bookingDetails);

        navigate("/Map");

        // You can now use bookingDetails as needed, for example, to send to a server
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setFrom(`${latitude},${longitude}`);
                // If you want to convert latitude and longitude to an address, use a geocoding API
            }, (error) => {
                console.error("Error obtaining location: ", error);
                alert("Unable to retrieve your location");
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <header className="home">
            <div className="home-content">
                <h1 className="welcome">Welcome to TransquiC</h1>
                <div className="card">
                    <h2 className="card-title">Choose Cab Type...</h2>
                    <div className="options">
                        <button className="option-btn" onClick={() => handleClick('Ride')}>Ride</button>
                        <button className="option-btn" onClick={() => handleClick('By the Hour')}>⌛By the Hour</button>
                    </div>
                    {selectedOption && (
                        <div className="form-container">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="From"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                    />
                                    <span className="icon" onClick={handleLocationClick}>📍</span>
                                </div>
                                {selectedOption === 'Ride' && (
                                    <>
                                        <button className="interchange-btn" onClick={handleInterchange}>↔</button>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                placeholder="To"
                                                value={to}
                                                onChange={(e) => setTo(e.target.value)}
                                            />
                                            <span className="icon">📍</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="form-group">
                                <label className="bold-label">Pickup Date:</label>
                                <input
                                    type="date"
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="bold-label">Pickup Time:</label>
                                <input
                                    type="time"
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="bold-label">Passengers:</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="7" // Added max attribute
                                    value={passengers}
                                    onChange={(e) => setPassengers(e.target.value)}
                                />
                                {selectedOption === 'Ride' && (
                                    <>
                                        <label className="bold-label">Duration:</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </>
                                )}
                                {selectedOption === 'By the Hour' && (
                                    <>
                                        <label className="bold-label">Duration:</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </>
                                )}
                            </div>
                            <button className="search-btn" onClick={handleSearch}>Search</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Booking;
