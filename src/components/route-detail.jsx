"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Car, Clock, MapPin, Calendar, Phone, DollarSign, CheckCircle, ChevronRight } from "lucide-react"

const RouteDetail = ({ slug, onBackClick }) => {
  const [loading, setLoading] = useState(true)
  const [routeData, setRouteData] = useState(null)

  // Simulating data fetch based on the route slug
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const fetchRouteData = () => {
      setLoading(true)

      // Simulate API call delay
      setTimeout(() => {
        // Mock data based on the slug
        const data = {
          "delhi-to-agra-cabs": {
            title: "Delhi To Agra Cabs",
            distance: "233 km",
            travelTime: "3-4 hours",
            startingPrice: "₹2,499",
            image: "/placeholder.svg?height=500&width=1000",
            description:
              "Book a cab from Delhi to Agra and visit the iconic Taj Mahal, one of the seven wonders of the world. Our comfortable and reliable taxi service ensures a smooth journey to explore the rich history and architecture of Agra.",
            features: [
              "AC Cabs with experienced drivers",
              "24/7 customer support",
              "No hidden charges",
              "Clean and sanitized vehicles",
              "Multiple car options available",
            ],
            carOptions: [
              { name: "Sedan", capacity: "4 Passengers", price: "₹2,499" },
              { name: "SUV", capacity: "6 Passengers", price: "₹3,499" },
              { name: "Tempo Traveller", capacity: "12 Passengers", price: "₹5,999" },
            ],
            popularAttractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itimad-ud-Daulah's Tomb"],
          },
          // Add more routes as needed
        }

        setRouteData(
          data[slug] || {
            title: `${slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}`,
            distance: "200+ km",
            travelTime: "Varies",
            startingPrice: "Contact for price",
            image: "/placeholder.svg?height=500&width=1000",
            description: "Book your cab for this route with Tajwaycabs for a comfortable and reliable journey.",
            features: [
              "AC Cabs with experienced drivers",
              "24/7 customer support",
              "No hidden charges",
              "Clean and sanitized vehicles",
            ],
            carOptions: [
              { name: "Sedan", capacity: "4 Passengers", price: "Contact for price" },
              { name: "SUV", capacity: "6 Passengers", price: "Contact for price" },
            ],
            popularAttractions: ["Various tourist attractions"],
          },
        )

        setLoading(false)
      }, 500)
    }

    fetchRouteData()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBackClick}
        className="fixed top-20 left-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <img src={routeData.image || "/placeholder.svg"} alt={routeData.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold">{routeData.title}</h1>
            <div className="flex flex-wrap items-center mt-4 text-white">
              <div className="flex items-center mr-6 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Distance: {routeData.distance}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>Travel Time: {routeData.travelTime}</span>
              </div>
              <div className="flex items-center mb-2">
                <DollarSign className="h-5 w-5 mr-2" />
                <span>Starting from {routeData.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Route</h2>
              <p className="text-gray-700 mb-6">{routeData.description}</p>

              <h3 className="text-xl font-bold mb-3">Why Choose Our Cab Service</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {routeData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-3">Available Car Options</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left">Car Type</th>
                      <th className="py-3 px-4 text-left">Capacity</th>
                      <th className="py-3 px-4 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routeData.carOptions.map((car, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-3 px-4">{car.name}</td>
                        <td className="py-3 px-4">{car.capacity}</td>
                        <td className="py-3 px-4">{car.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">Popular Attractions</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {routeData.popularAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-yellow-500 mr-2" />
                    <span>{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Book Your Cab Now</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Pickup City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      defaultValue={routeData.title.split(" To ")[0]}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Destination City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      defaultValue={routeData.title.split(" To ")[1]?.replace(" Cabs", "")}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Trip Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="DD-MM-YYYY"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Car Type</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                      <option value="">Select Car Type</option>
                      {routeData.carOptions.map((car, index) => (
                        <option key={index} value={car.name}>
                          {car.name} ({car.capacity})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-md transition-colors"
                >
                  Book Now
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">Or call us directly</p>
                <a
                  href="tel:+919999955712"
                  className="block mt-2 text-lg font-bold text-yellow-600 hover:text-yellow-700"
                >
                  +91 9999 955 712
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteDetail
