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

import "./App.css";

function App() {
  return (
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
        <Route path="/signup" element={<SignupPage />} /> {/* Signup page */}
        <Route path="/login" element={<LoginPage />} /> {/* Signup page */}
       <Route path="/profile" element={<ProfilePage/>} /> {/* Profile page */}
       <Route path="/booking-summary" element={<CarBookingPage/>} /> {/* cabs page */}
      </Routes>
      {/* <PopularRoutes /> */}

      <Footer />
    </Router>
  );
}

export default App;
