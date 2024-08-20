import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [emailAuth, setEmailAuth] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [price, setPrice] = useState(null);
  const [distance, setDistance] = useState(null); 
  const [time, setTime] = useState(null);

  return (
    <AuthContext.Provider value={{ 
      emailAuth, 
      setEmailAuth, 
      bookingDetails, 
      setBookingDetails, 
      price, 
      setPrice, 
      distance, 
      setDistance, 
      time, 
      setTime 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
