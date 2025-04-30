import React, { createContext, useState, useContext } from 'react';

// Create Context
const BookingContext = createContext();

// Context Provider Component
export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    pickup: "",
    destination: "",
    phone: "",
    fare: 0,
    distance: 0,
    tripType: "one-way",
    duration: "" ,
    tripStart: "",
    tripEnd: "",
  });

  // Function to update booking data
  const setBookingDetails = (data) => {
    setBookingData(data);
  };

  return (
    <BookingContext.Provider value={{ bookingData, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};


export default BookingProvider;