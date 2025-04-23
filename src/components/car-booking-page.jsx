"use client"

import { useState, useEffect } from "react"
import TopSearchBar from "./components/TopSearchBar"
import CabCard from "./components/CabCard"
import Filters from "./components/Filters"
import { Card } from "@/components/ui/card"

// Car data
const carData = [
  {
    id: 1,
    name: "Swift",
    type: "Hatchback",
    rating: 4.2,
    seats: 4,
    ac: true,
    bags: 1,
    fuelType: ["CNG", "Petrol"],
    price: 1849,
    charges: 499,
    image: "/urban-commuter.png",
  },
  {
    id: 2,
    name: "Innova",
    type: "SUV",
    rating: 4.5,
    seats: 6,
    ac: true,
    bags: 2,
    fuelType: ["CNG", "Petrol"],
    price: 2849,
    charges: 699,
    image: "/silver-innova-cityscape.png",
  },
  {
    id: 3,
    name: "Dzire",
    type: "Sedan",
    rating: 4.1,
    seats: 4,
    ac: true,
    bags: 1,
    fuelType: ["CNG", "Petrol"],
    price: 1883,
    charges: 619,
    image: "/modern-city-sedan.png",
  },
  {
    id: 4,
    name: "Wagon R",
    type: "Hatchback",
    rating: 4.0,
    seats: 4,
    ac: true,
    bags: 1,
    fuelType: ["CNG", "Petrol"],
    price: 1749,
    charges: 459,
    image: "/urban-wagon-r.png",
  },
  {
    id: 5,
    name: "Celerio",
    type: "Hatchback",
    rating: 3.9,
    seats: 4,
    ac: true,
    bags: 1,
    fuelType: ["CNG", "Petrol"],
    price: 1699,
    charges: 449,
    image: "/vibrant-city-celerio.png",
  },
  {
    id: 6,
    name: "Ertiga",
    type: "MPV",
    rating: 4.3,
    seats: 6,
    ac: true,
    bags: 2,
    fuelType: ["CNG", "Petrol"],
    price: 2499,
    charges: 649,
    image: "/modern-city-street-ertiga.png",
  },
]

export default function CarBookingPage() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Search Section */}
      <TopSearchBar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="text-sm text-gray-700 mb-4">
          Rates for <span className="font-bold">149 Kms</span> approx distance |{" "}
          <span className="font-bold">3 hr(s)</span> approx time
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section - Desktop */}
          <div className="w-full md:w-1/4">
            <Filters carData={carData} isMobile={isMobile} />
          </div>

          {/* Car Listings */}
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <Card className="p-4 rounded-lg shadow-sm mb-4 border border-gray-300">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold">Our Top Rated Partner</h2>
                  <div className="flex items-center space-x-2">
                    <img src="/abstract-travel-icon.png" alt="Savaari" className="h-8" />
                    <img src="/abstract-travel-icon.png" alt="MakeMyTrip" className="h-8" />
                  </div>
                </div>
                <p className="text-gray-600">India's Leading Outstation Cab Rentals Since 2006</p>
              </Card>
            </div>

            {/* Car Cards */}
            <div>
              {carData.map((car) => (
                <CabCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add padding at the bottom to account for the fixed navigation on mobile */}
      {isMobile && <div className="h-16"></div>}
    </div>
  )
}
