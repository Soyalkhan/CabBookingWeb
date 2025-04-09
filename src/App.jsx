import Header from "./components/header"
import Hero from "./components/hero"
import PopularRoutes from "./components/popular-routes"
import Footer from "./components/footer"
import Testimoanils from "./components/testimonials"
import Whychooseus from "./components/why-choose-us"
import GetInTouch from "./components/get-in-touch"

import './App.css'
import React from 'react'
function App() {


  return (
    <>
      <Header />
      <Hero />
      <PopularRoutes />
      <Testimoanils />
      <Whychooseus />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default App
