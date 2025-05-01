import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Routes

// Components
import Header from "./components/header";
import Hero from "./components/hero";
import PopularRoutes from "./components/popular-routes";
import Footer from "./components/footer";
import Testimoanils from "./components/testimonials";
import Whychooseus from "./components/why-choose-us";
import GetInTouch from "./components/get-in-touch";
import SignupPage from "./pages/signup-page"; // Import SignupPage
import LoginPage from "./pages/login-page"; // Import SignupPage
import ProfilePage from "./pages/profilePage";
import CarBookingPage from "./pages/cabSelectionPage";
import ContactForm from "./pages/contact";
import  BookingProvider  from "./components/BookingContext";
import  ReviewBooking  from "./pages/reviewBooking";
import "./App.css";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BookingProvider>

     
        

    <Router>
      

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularRoutes />
              <Testimoanils />
              <Whychooseus />
              <GetInTouch />
            </>
          }
        />{" "}
        {/* Home page */}
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route
          path="/profile"
          element={<ProtectedRoute Component={ProfilePage} />}
        />
        
        {" "}
        < Route
          path="/admin"
          element={<ProtectedRoute Component={AdminPanel} />}
        />
        {/* Profile page */}
        <Route path="/booking-summary" element={<CarBookingPage />} />{" "}
        <Route path="/reviewbooking" element={<ReviewBooking/>} />{" "}
        
      </Routes>
      {/* <PopularRoutes /> */}

      <Footer />
    </Router>
    </BookingProvider>
  );
}

// Protected Route to ensure the user is logged in
function ProtectedRoute({ Component }) {
  const token = localStorage.getItem("authToken");

  if (!token) {
    // Redirect to signup page if not logged in
    window.location.href = "/signup";
    return null; // Prevents the Profile page from rendering
  }

  
  // User is logged in, render the Profile page
  return <Component />;
}
export default App;
